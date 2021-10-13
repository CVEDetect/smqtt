package io.github.quickmsg.source.kafka;

import com.hivemq.client.mqtt.MqttClient;
import com.hivemq.client.mqtt.datatypes.MqttQos;
import com.hivemq.client.mqtt.mqtt3.Mqtt3AsyncClient;
import com.hivemq.client.mqtt.mqtt3.message.connect.Mqtt3ConnectBuilder;
import com.hivemq.client.mqtt.mqtt3.message.connect.connack.Mqtt3ConnAck;
import io.github.quickmsg.common.rule.source.Source;
import io.github.quickmsg.common.rule.source.SourceBean;
import io.github.quickmsg.common.utils.JacksonUtil;
import io.netty.util.internal.StringUtil;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;
import java.util.concurrent.CompletableFuture;


/**
 * mqtt
 *
 * @author zhaopeng
 * @date 2021/10/13
 */
@Slf4j
public class MqttSourceBean implements SourceBean {

    private Mqtt3AsyncClient client;

    @Override
    public Boolean support(Source source) {
        return source == Source.MQTT;
    }

    /**
     * 初始化
     *
     * @param sourceParam 参数
     * @return {@link Boolean}
     */
    @Override
    public Boolean bootstrap(Map<String, Object> sourceParam) {
        try {
            String clientId = sourceParam.get("clientId").toString();
            String host = sourceParam.get("host").toString();
            Integer port = Integer.parseInt(sourceParam.get("port").toString());
            String userName = sourceParam.get("userName").toString();
            String passWord = sourceParam.get("passWord").toString();

            client = MqttClient.builder()
                    .useMqttVersion3()
                    .identifier(clientId)
                    .serverHost(host)
                    .serverPort(port)
                    .buildAsync();

            Mqtt3ConnectBuilder.Send<CompletableFuture<Mqtt3ConnAck>> completableFutureSend = client.connectWith();

            if (!StringUtil.isNullOrEmpty(userName) && !StringUtil.isNullOrEmpty(passWord)) {
                completableFutureSend.simpleAuth()
                        .username(userName)
                        .password(passWord.getBytes())
                        .applySimpleAuth();
            }

            completableFutureSend
                    .send()
                    .whenComplete((connAck, throwable) -> {
                        if (throwable != null) {
                            // handle failure
                            log.error("mqtt client connect error", throwable);
                        } else {
                            // setup subscribes or start publishing
                        }
                    });

            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 转发数据
     *
     * @param object 对象
     * @return {@link Object}
     */
    @Override
    public void transmit(Map<String, Object> object) {
        String json = JacksonUtil.bean2Json(object);
        log.info("mqtt send msg {}", json);
        String topic = (String) object.get("topic");
        String msg = (String) object.get("msg");
        Integer qos = (Integer) object.get("qos");

        client.publishWith()
                .topic(topic)
                .payload(msg.getBytes())
                .qos(MqttQos.fromCode(qos))
                .send()
                .whenComplete((publish, throwable) -> {
                    if (throwable != null) {
                        // handle failure to publish
                        log.error("mqtt client publish error", throwable);
                    } else {
                        // handle successful publish, e.g. logging or incrementing a metric
                    }
                });
    }


    @Override
    public void close() {
        if (client != null) {
            client.disconnect();
        }
    }
}
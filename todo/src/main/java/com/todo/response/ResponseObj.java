package com.todo.response;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class ResponseObj {

	private Map<String, Object> data;
	
	private String msgType ;

	public Map<String, Object> getData() {
		return data;
	}

	public void setData(Map<String, Object> data) {
		this.data = data;
	}

	public String getMsgType() {
		return msgType;
	}

	public void setMsgType(String msgType) {
		this.msgType = msgType;
	}

	public void addData(String Key, Object value) {
		if (data == null) {
			data = new HashMap<>();
		}
		data.put(Key, value);
	}
}

package com.rnnativemodule.module;

import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule{

    private static final String DURATION_SHORT = "LENGTH_LONG";
    private static final String DURATION_LONG = "LENGTH_SHORT";

    public ToastModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModuleAndroid";
    }


    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> map = new HashMap<>();
        map.put(DURATION_SHORT, Toast.LENGTH_SHORT);
        map.put(DURATION_LONG, Toast.LENGTH_LONG);
        return map;
    }


    @ReactMethod
    public void show(String message, int duration){
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}

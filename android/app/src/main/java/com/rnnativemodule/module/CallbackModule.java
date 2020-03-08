package com.rnnativemodule.module;

import android.os.Handler;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CallbackModule extends ReactContextBaseJavaModule {

    public CallbackModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "CallbackModuleAndroid";
    }

    @ReactMethod
    public void getCallbackData(Callback callback){
        new Handler().postDelayed(() -> callback.invoke("Callback message after 10 seconds"), 10000);
    }
}

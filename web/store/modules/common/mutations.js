export default {
    set_province(state, payload) {
        state.province = payload.province;
    },
    set_list_otp_method(state, payload) {
        state.otp_method = payload.otp_method;
    },
    set_adUnitPath(state, payload) {
    	state.list_ads.push(payload.data);
    }
};

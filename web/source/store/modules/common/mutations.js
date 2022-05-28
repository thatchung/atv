export default {
    set_province(state, payload) {
        state.province = payload.province;
    },
    set_contact(state, payload) {
        state.contact = payload.contact;
    },
    set_list_otp_method(state, payload) {
        state.otp_method = payload.otp_method;
    },
    set_adUnitPath(state, payload) {
    	state.list_ads.push(payload.data);
    },
    set_list_year(state, payload) {
        state.list_year = payload.list_year
    },
    set_list_location(state, payload) {
        state.list_location = payload.list_location
    },
    set_list_category(state, payload) {
        state.list_category = payload.list_category
    }
};

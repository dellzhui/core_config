#!/bin/bash

patch_deprecated()
{
    sed -E -i 's/^(\s+cv\.deprecated\(CONF_.*?\),  # Deprecated in HA Core 2022.3)$/#\1/g' /usr/src/homeassistant/homeassistant/components/mqtt/__init__.py && return 0
    echo "patch_deprecated failed"
    return 1
}

patch_async_setup()
{
    sed -E -i 's/^(\s+context=\{"source": config_entries\.)SOURCE_INTEGRATION_DISCOVERY\},$/\1SOURCE_IMPORT\},/g' /usr/src/homeassistant/homeassistant/components/mqtt/__init__.py && return 0
    echo "patch_async_setup failed"
    return 1
}

patch_async_step_import()
{
    sed -i 's/class FlowHandler(config_entries.ConfigFlow, domain=DOMAIN):/class FlowHandler(config_entries.ConfigFlow, domain=DOMAIN):\n    async def async_step_import(self, user_input):\n        if self._async_current_entries():\n            return self.async_abort(reason="single_instance_allowed")\n        return self.async_create_entry(title="configuration.yaml", data={})\n/g' /usr/src/homeassistant/homeassistant/components/mqtt/config_flow.py && return 0
    echo "patch_async_step_import failed"
    return 1
}

patch_met_async_step_onboarding()
{
    sed -i "s/return self.async_abort(reason=\"no_home\")/await self.hass.config.async_update(**{\"latitude\": ${LATITUDE}, \"longitude\": ${LONGITUDE}, \"elevation\": ${ELEVATION}, \"location_name\": \"${LOCATION_NAME}\"})/g" /usr/src/homeassistant/homeassistant/components/met/config_flow.py && return 0
    echo "patch_met_async_step_onboarding failed"
    return 1
}

patch_CoreConfigOnboardingView_post()
{
    sed -i 's/onboard_integrations = \["met", "radio_browser"\]/onboard_integrations = \["met"\]/g' /usr/src/homeassistant/homeassistant/components/onboarding/views.py && return 0
    echo "patch_CoreConfigOnboardingView_post failed"
    return 1
}

patch_mqtt()
{
    patch_deprecated && \
    patch_async_setup && \
    patch_async_step_import && \
    echo "patch mqtt succeed" && return 0
    echo "patch mqtt failed"
    return 1
}

patch_met()
{
    patch_met_async_step_onboarding && echo "patch met succeed" && return 0
    echo "patch met failed"
    return 1
}

patch_onboarding()
{
    patch_CoreConfigOnboardingView_post && echo "patch onboarding succeed" && return 0
    echo "patch onboarding failed"
    return 1
}

check_patch()
{
    result="`cat /usr/src/homeassistant/homeassistant/components/mqtt/__init__.py | grep -E "^#.*,  # Deprecated in HA Core 2022.3$" | wc -l`"
    [ "x${result}" = "x7" ] || return 1
    
    cat /usr/src/homeassistant/homeassistant/components/mqtt/__init__.py | grep "^                context={\"source\": config_entries.SOURCE_IMPORT},$" 1>/dev/null 2>&1 || return 1
    
    cat /usr/src/homeassistant/homeassistant/components/mqtt/config_flow.py | grep "^        return self.async_create_entry(title=\"configuration.yaml\", data={})$" 1>/dev/null 2>&1 || return 1
    
    cat /usr/src/homeassistant/homeassistant/components/met/config_flow.py | grep "\"latitude\": ${LATITUDE}, \"longitude\": ${LONGITUDE}, \"elevation\": ${ELEVATION}, \"location_name\": \"${LOCATION_NAME}\"" 1>/dev/null 2>&1 || return 1
    
    cat /usr/src/homeassistant/homeassistant/components/onboarding/views.py | grep 'onboard_integrations = \["met"\]' 1>/dev/null 2>&1 || return 1
    
    return 0
}

do_patch()
{
    patch_mqtt && \
    patch_met && \
    patch_onboarding && \
    check_patch && \
    echo "patch succeed" && return 0
    echo "patch failed"
    return 1
}

source /config/env.sh

do_patch
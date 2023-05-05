import { VALIDATORS, COMPONENTS } from "react-form-catalog";

export const MOCK_FORM_NESTED_HORIZONTAL = [
    // : FormCatalogItem[]
    {
        id: "tuit",
        component: COMPONENTS.COMPONENTS_LAYOUTS.ComponentsGroupHorizontal,
        componentInputs: () => {
            return { label: "tuitlabel" };
        },
        children: [
            {
                id: "fooId",
                component: COMPONENTS.COMPONENTS_LAYOUTS.ComponentsGroupVertical,
                componentInputs: () => {
                    return { label: "testlabel" };
                },
                children: [
                    {
                        id: "mew",
                        component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiText,
                        componentInputs: () => {
                            return { label: "fooLabel" };
                        },
                        validators: () => [VALIDATORS.VALIDATOR_REQUIRED]
                    },
                    {
                        id: "bar",
                        componentInputs: () => {
                            return { label: "barLabel" };
                        },
                        component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiText
                    },
                    {
                        id: "bar",
                        component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiSelect,
                        componentInputs: () => {
                            return {
                                label: "barLabel",
                                values: [
                                    {
                                        key: "USD",
                                        value: "$"
                                    },
                                    {
                                        key: "EUR",
                                        value: "€"
                                    }
                                ]
                            };
                        },
                        inputValue: () => "EUR" // TODO rename ? input value can be confused with component inputs
                    },
                    {
                        id: "muiswitch",
                        component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiSwitch,
                        componentInputs: () => {
                            return { label: "muiSwitchLabel" };
                        }
                    },
                    {
                        id: "muiCheckBox",
                        component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiCheckBox,
                        componentInputs: () => {
                            return { label: "muiSwitchLabel" };
                        }
                    }
                ]
            },
            {
                id: "nyee01",
                component: COMPONENTS.COMPONENTS_LAYOUTS.ComponentsGroupVertical,
                componentInputs: () => {
                    return { label: "testlabel" };
                },
                children: [
                    {
                        id: "nyee0",
                        component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiText,
                        componentInputs: () => {
                            return { label: "nyee0Label" };
                        },
                        inputValue: () => "nyee0Value",
                        validators: () => [VALIDATORS.VALIDATOR_REQUIRED]
                    },
                    {
                        id: "huu",
                        component: COMPONENTS.COMPONENTS_LAYOUTS.ComponentsGroupVertical,
                        componentInputs: () => {
                            return { label: "huulabel" };
                        },
                        children: [
                            {
                                id: "foo",
                                component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiText,
                                componentInputs: () => {
                                    return { label: "huu0Label" };
                                },
                                inputValue: () => "fooValue",
                                validators: () => [VALIDATORS.VALIDATOR_REQUIRED]
                            },
                            {
                                id: "bar",
                                componentInputs: () => {
                                    return { label: "huu1Label" };
                                },
                                component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiText
                            }
                        ]
                    },
                    {
                        id: "nyee1",
                        componentInputs: () => {
                            return { label: "nyee1Label" };
                        },
                        component: COMPONENTS.COMPONENTS_ITEMS_MUI.MuiText
                    }
                ]
            }
        ]
    }
];

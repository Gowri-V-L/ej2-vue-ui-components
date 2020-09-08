import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';


export const properties: string[] = ['actionOnBlur', 'adaptor', 'cancelButton', 'cssClass', 'disabled', 'editableOn', 'emptyText', 'enableEditMode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mode', 'model', 'name', 'popupSettings', 'primaryKey', 'saveButton', 'showButtons', 'submitOnEnter', 'template', 'textOption', 'type', 'url', 'validationRules', 'value', 'actionBegin', 'actionFailure', 'actionSuccess', 'beforeSanitizeHtml', 'beginEdit', 'cancelClick', 'change', 'created', 'destroyed', 'submitClick', 'validating'];
export const modelProps: string[] = [];

/**
 * `ejs-inplace-editor` represents the VueJS InPlaceEditor Component.
 * ```vue
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class InPlaceEditorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new InPlaceEditor({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public extendModelValue(val: string | number | boolean | Object | Object | string[] | Object[] | number[] | boolean[]): void {
        return this.ej2Instances.extendModelValue(val);
    }

    public save(): void {
        return this.ej2Instances.save();
    }

    public setValue(): void {
        return this.ej2Instances.setValue();
    }

    public validate(): void {
        return this.ej2Instances.validate();
    }
}

export const InPlaceEditorPlugin = {
    name: 'ejs-inplaceeditor',
    install(Vue: any) {
        Vue.component(InPlaceEditorPlugin.name, InPlaceEditorComponent);

    }
}

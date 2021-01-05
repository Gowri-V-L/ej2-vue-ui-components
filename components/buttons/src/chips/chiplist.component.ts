import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { ChipList } from '@syncfusion/ej2-buttons';
import { ChipsDirective, ChipDirective, ChipsPlugin, ChipPlugin } from './chips.directive'


export const properties: string[] = ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'leadingIconUrl', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss', 'trailingIconUrl', 'beforeClick', 'click', 'created', 'delete'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class ChipListComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-chips":"e-chip"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new ChipList({});
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
    
    public add(chipsData: string[] | number[] | Object[] | string | number | Object): void {
        return this.ej2Instances.add(chipsData);
    }

    public find(fields: number | Object): Object {
        return this.ej2Instances.find(fields);
    }

    public getSelectedChips(): Object | Object {
        return this.ej2Instances.getSelectedChips();
    }

    public remove(fields: number | number[] | Object | Object[]): void {
        return this.ej2Instances.remove(fields);
    }

    public select(fields: number | number[] | Object | Object[] | string[], selectionType?: Object): void {
        return this.ej2Instances.select(fields, selectionType);
    }
}

export const ChipListPlugin = {
    name: 'ejs-chiplist',
    install(Vue: any) {
        Vue.component(ChipListPlugin.name, ChipListComponent);
        Vue.component(ChipPlugin.name, ChipDirective);
        Vue.component(ChipsPlugin.name, ChipsDirective);

    }
}

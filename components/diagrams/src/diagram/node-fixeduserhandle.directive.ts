import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}
export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
/* Start Options({
    inject: {
        custom: {
            default: null
        }
    }
}) End */

export class NodeFixedUserHandlesDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (gh) {
            let h: any = gh || createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (gh && this.custom) {
            this.custom();
        }
    }
    public getTag(): string {
        return 'e-node-fixeduserhandles';
    }
}
export const NodeFixedUserHandlesPlugin = {
    name: 'e-node-fixeduserhandles',
    install(Vue: any) {
        Vue.component(NodeFixedUserHandlesPlugin.name, NodeFixedUserHandlesDirective);
    }
}

/**
 * `e-node` directive represent a annotation of the vue Diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-fixeduserhandles>
 * <e-node-fixeduserhandle>
 * </e-node-fixeduserhandle>
 * </e-node-fixeduserhandles>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class NodeFixedUserHandleDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-node-fixeduserhandle';
    }
}
export const NodeFixedUserHandlePlugin = {
    name: 'e-node-fixeduserhandle',
    install(Vue: any) {
        Vue.component(NodeFixedUserHandlePlugin.name, NodeFixedUserHandleDirective);
    }
}
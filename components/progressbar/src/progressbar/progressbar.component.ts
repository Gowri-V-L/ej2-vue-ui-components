import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { ProgressBar } from '@syncfusion/ej2-progressbar';
import { ProgressBarAnnotationsDirective, ProgressBarAnnotationDirective, ProgressBarAnnotationsPlugin, ProgressBarAnnotationPlugin } from './annotations.directive'


export const properties: string[] = ['animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableProgressSegments', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isActive', 'isGradient', 'isIndeterminate', 'isStriped', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'rangeColors', 'role', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width', 'animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'valueChanged'];
export const modelProps: string[] = [];

/**
 * Represents Vuejs ProgressBar Component
 * ```vue
 * <ejs-progressbar></ejs-progressbar>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class ProgressBarComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-progressbar-annotations":"e-progressbar-annotation"};
    public tagNameMapper: Object = {"e-progressbar-annotations":"e-annotations"};
    
    constructor() {
        super();
        this.ej2Instances = new ProgressBar({});
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
    
    public calculateProgressRange(value: number, minimum?: number, maximum?: number): number {
        return this.ej2Instances.calculateProgressRange(value, minimum, maximum);
    }

    public calculateSegmentSize(width: number, thickness: number): string {
        return this.ej2Instances.calculateSegmentSize(width, thickness);
    }

    public createClipPath(clipPath?: Object, range?: number, d?: string, refresh?: boolean, thickness?: number, isLabel?: boolean, isMaximum?: boolean): Object {
        return this.ej2Instances.createClipPath(clipPath, range, d, refresh, thickness, isLabel, isMaximum);
    }

    public getPathLine(x: number, width: number, thickness: number): string {
        return this.ej2Instances.getPathLine(x, width, thickness);
    }

    public hide(): void {
        return this.ej2Instances.hide();
    }

    public removeSvg(): void {
        return this.ej2Instances.removeSvg();
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public show(): void {
        return this.ej2Instances.show();
    }
}

export const ProgressBarPlugin = {
    name: 'ejs-progressbar',
    install(Vue: any) {
        Vue.component(ProgressBarPlugin.name, ProgressBarComponent);
        Vue.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
        Vue.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);

    }
}

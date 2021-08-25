import mitt from "mitt";

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        emitter: typeof mitt
        $validate: (data: object, rule: object) => boolean
    }
}

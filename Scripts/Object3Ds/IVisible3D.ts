import {Camera3D} from "./Camera3D";

export default interface IVisible3D {
    get visible(): boolean;
    set visible(value: boolean);
    render(camera:Camera3D): void;
}

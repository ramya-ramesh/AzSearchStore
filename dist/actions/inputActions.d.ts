export declare type InputAction = {
    type: "SET_INPUT";
    input: string;
};
export declare const setInput: (input: string) => InputAction;

export declare function updateObject<T, U>(oldObject: T, newValues: U): T;
export declare function updateObjectAtKey<T>(oldObject: {
    [key: string]: T;
}, entry: T, key: string): {
    [key: string]: T;
};



export function ConsoleLogResponse(){
    return (
        target: any,
        propertyKey: string,
        propertyDescriptor: PropertyDescriptor,
    ) => {
        const originalMethod = propertyDescriptor.value
        propertyDescriptor.value = async function(...arg: any[]){
            const value = await originalMethod.apply(this, arg);
            console.log(`${propertyKey}:${value}`);
            return value
        };
        return propertyDescriptor;
    }
}

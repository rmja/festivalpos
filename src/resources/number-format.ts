export class NumberValueConverter {
    toView(value: number) {
        return value;
    }

    fromView(value: any) {
        return Number(value);
    }
}
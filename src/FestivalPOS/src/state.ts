import { Big } from "big.js";

export interface State {
    terminalId: number;
    pointOfSaleId: number
    orderLines: OrderLineState[];
    currentMiscOrderLine: {
        name?: string;
        total: Big;
    }
}

export interface OrderLineState {
    productId?: number;
    name?: string;
    quantity: number;
    total: Big;
}

export const initialState: State = {
    terminalId: 0,
    pointOfSaleId: 0,
    orderLines: [],
    currentMiscOrderLine: { total: new Big(0) }
};

export function ensureValidState(state: State) {
    const newState = Object.assign({}, state);

    newState.orderLines = state.orderLines.map(x => Object.assign(x, {
        total: new Big(x.total)
    }));
    newState.currentMiscOrderLine.total = new Big(newState.currentMiscOrderLine.total);

    return newState;
}

export function setup(state: State, terminalId: number, pointOfSaleId: number) {
    const newState = Object.assign({}, state);

    newState.terminalId = terminalId;
    newState.pointOfSaleId = pointOfSaleId;

    return newState;
}

export function resetOrder(state: State) {
    const newState = Object.assign({}, state);

    newState.orderLines = [];
    newState.currentMiscOrderLine = {
        total: new Big(0)
    };

    return newState;
}

export function updateCurrentMisc(state: State, amount: Big) {
    const newState = Object.assign({}, state);

    newState.currentMiscOrderLine = {
        name: state.currentMiscOrderLine.name,
        total: amount.plus(0)
    };

    return newState;
}

export function addProductOrderLine(state: State, product: { id: number, name: string, price: Big }) {
    const newState = Object.assign({}, state);
    const index = state.orderLines.findIndex(x => x.productId === product.id);
    const orderLine = state.orderLines[index];

    if (!orderLine) {
        newState.orderLines = [...state.orderLines, {
            name: product.name,
            productId: product.id,
            quantity: 1,
            total: product.price.plus(0)
        }];
    }
    else {
        const newQuantity = orderLine.quantity + 1;
        const newTotal = orderLine.total.add(product.price);

        newState.orderLines = [
            ...state.orderLines.slice(0, index),
            {
                name: product.name,
                productId: product.id,
                quantity: newQuantity,
                total: newTotal
            },
            ...state.orderLines.slice(index + 1)
        ];
    }

    return newState;
}

export function addCurrentMiscOrderLine(state: State) {
    const newState = Object.assign({}, state);
    newState.orderLines = [...state.orderLines, {
        quantity: 1,
        name: state.currentMiscOrderLine.name,
        total: state.currentMiscOrderLine.total.plus(0)
    }];

    newState.currentMiscOrderLine = { total: new Big(0) };

    return newState;
}

export function removeOrderLine(state: State, index: number) {
    const newState = Object.assign({}, state);

    newState.orderLines = [
        ...state.orderLines.slice(0, index),
        ...state.orderLines.slice(index + 1)
    ];

    return newState;
}

export function isSetup(state: State) {
    return state.terminalId && state.pointOfSaleId;
}

export function getOrderTotal(state: State) {
    return state.orderLines.reduce((current, line) => current.plus(line.total), state.currentMiscOrderLine.total);
}

export function getOrderQuantityTotal(state: State) {
    return state.orderLines.reduce((current, line) => current + line.quantity, state.currentMiscOrderLine.total.eq(0) ? 0 : 1);
}
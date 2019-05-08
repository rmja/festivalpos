export function moveBefore<T>(array: T[], itemMatcherFn: (item: T) => boolean, siblingMatcherFn: (item: T) => boolean) {
    const removedItem = remove(array, itemMatcherFn);
    const nextIndex = array.findIndex(siblingMatcherFn);
    const items = removedItem ? [removedItem] : [];
    array.splice(nextIndex >= 0 ? nextIndex : array.length, 0, ...items);
}

function remove<T>(array: T[], matcherFn: (item: T) => boolean) {
    const index = array.findIndex(matcherFn);
    if (index >= 0) {
        return array.splice(index, 1)[0];
    }
}
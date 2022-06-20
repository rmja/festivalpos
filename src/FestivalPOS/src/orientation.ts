export const DEFAULT_ORIENTATION: OrientationLockType = "portrait-primary";

// This does not work because a SecurityError is thrown because we are not in fullscreen,
// which we do not want to be.

export async function tryLockOrientation() {
    try {
        await screen.orientation.lock(DEFAULT_ORIENTATION);
    }
    catch {
    }
}

export async function tryUnlockOrientation() {
    try {
        screen.orientation.unlock();
    }
    catch {
    }
}
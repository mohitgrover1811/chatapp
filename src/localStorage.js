export const loadState = () => {
	try {
        const serialState = localStorage.getItem('persistentState');
        if (serialState === null) {
            return undefined;
        }
        return JSON.parse(serialState);
	} catch (err) {
	    return undefined;
	}
};

export const saveState = (state) => {
	try {
        console.log(state);
        const serialState = JSON.stringify(state);
        localStorage.setItem('persistentState', serialState);
	} catch(err) {
		console.log(err);
	}
};

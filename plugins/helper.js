export default ({ app }, inject) => {
    inject('is_empty_value', (value) => {
        if (value === undefined) {
            return true;
        }

        if (value === null) {
            return true;
        }

        if (value === []) {
            return true;
        }

        if (value === '') {
            return true;
        }

        return false;
    });

    inject('is_not_empty_array', (value) => {
        if (!Array.isArray(value)) {
            return false;
        }

        return value.length > 0;
    });
}
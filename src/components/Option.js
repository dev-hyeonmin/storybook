import React from 'react';
import PropTypes from 'prop-types';

export default function Option({ option: { id, title, state }, keyword, onSelected }) {
    const createTitle = (title) => {
        if (keyword) {
            const regex = new RegExp(`${keyword}`, 'g');
            return {__html: title.replace(regex, `<i>${keyword}</i>`)};
        } else {
            return {__html: title};
        }
    }
    return (
        <div
            className='item-option'
            onClick={() => onSelected(option)}
            dangerouslySetInnerHTML={createTitle(title)}
        >
        </div>
    );
}


Option.propTypes = {
    option: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
    keyword: PropTypes.string,
    onSelected: PropTypes.func,
};

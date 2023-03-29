
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { updateTaskState } from '../lib/store';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span
                    className="checkbox-custom"
                    onClick={() => onArchiveTask(id)}
                    id={`archiveTask-${id}`}
                    aria-label={`archiveTask-${id}`}
                />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    <a onClick={() => onPinTask(id)} className={state === 'TASK_PINNED' ? `active` : ``}>
                        <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
                    </a>
                )}
            </div>
        </div>
    );
}

Task.propTypes = {
    /** Composition of the task */
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    /** Event **/
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};

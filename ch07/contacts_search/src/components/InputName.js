import React from 'react';
import PropTypes from 'prop-types';

const InputName = (props) => {
    let changeName = (e) => {
        //함수형 컴포넌트 이기 때문에  this 뺀다
        props.changeName(e.target.value);
    }
    return (
        <div className="row">
        <div className="col">
            <div className="input-group">
                <input id="name" type="text" className="form-control" name="name" 
                    placeholder="Type name and Enter! " value={props.name}
                    onChange={changeName} />
                <span className="btn btn-primary input-group-addon" onClick={props.searchContact}>검{'  '}색</span>
            </div>
        </div>
        </div>
    );
};

InputName.propTypes = {
    searchContact: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    name : PropTypes.string
};

export default InputName;
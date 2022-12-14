import React from 'react';
import { connect } from 'react-redux';
import { removeNationalize } from '../actions';

const Nationalize = (props) => {
    const { name, countries, isFetching, error } = props;

    const handleClear = () => {
        props.removeNationalize()
    }

    if (error) {
        return <h2>OH NO!</h2>
    }

    if (countries.length === 0) {
        return <h2>No results found...</h2>
    }

    if (isFetching) {
        return <h2>Loading...</h2>
    }

    if (name === '') {
        return null
    }

    return (
        <>
            <div>
                <h2>Nationalized: {name}</h2>
                <h3>Country: {countries[0].country_id}, Probability: {Math.round(countries[0].probability * 100) }%</h3>
                <h3>Country: {countries[1].country_id}, Probability: {Math.round(countries[1].probability * 100) }%</h3>
                <h3>Country: {countries[2].country_id}, Probability: {Math.round(countries[2].probability * 100) }%</h3>
                <button onClick={handleClear}>X</button>
            </div>
        </>
    )
}

const mapStateToProps = state =>  {
    console.log(state)
    return {
        name: state.name,
        countries: state.countries,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { removeNationalize })(Nationalize);
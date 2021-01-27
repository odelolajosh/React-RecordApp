import { useState } from "react";
import styled from "styled-components";
import close from '../assets/close.svg';
import { FILTER_GENDER_FEMALE, FILTER_GENDER_MALE, FILTER_NONE, FILTER_PMT_METHOD_CC, FILTER_PMT_METHOD_CHECK, FILTER_PMT_METHOD_PAYPAL, NO_FILTER_GENDER, NO_FILTER_PMT } from "../hooks/useFilter";


const FilterList = ({ filterBasedOnParams, filterTerm }) => {
    const [ filterParams, setFilterParams ] = useState(null);

    const params = {
        "Payment Method": {
            "CC": () => filterBasedOnParams(FILTER_PMT_METHOD_CC),
            "Check": () => filterBasedOnParams(FILTER_PMT_METHOD_CHECK),
            "PayPal": () => filterBasedOnParams(FILTER_PMT_METHOD_PAYPAL),
            "Remove this Filter": () => filterBasedOnParams(NO_FILTER_PMT)
        },
        "Gender": {
            "Male": () => filterBasedOnParams(FILTER_GENDER_MALE),
            "Female": () => filterBasedOnParams(FILTER_GENDER_FEMALE),
            "Remove this Filter": () => filterBasedOnParams(NO_FILTER_GENDER)
        }
    }

    const checkForGenderFilter = () => {
        if (!filterTerm || filterTerm === FILTER_NONE) return null;
        if (Boolean(filterTerm.find(item => item === FILTER_GENDER_FEMALE)))
            return "Female"
        else if (Boolean(filterTerm.find(item => item === FILTER_GENDER_MALE)))
            return "Male"
        else
            return null;
    }

    const checkForPmtMethodFilter = () => {
        if (!filterTerm || filterTerm === FILTER_NONE) return null;
        if (Boolean(filterTerm.find(item => item === FILTER_PMT_METHOD_CC)))
            return "CC"
        else if (Boolean(filterTerm.find(item => item === FILTER_PMT_METHOD_CHECK)))
            return "Check"
        else if (Boolean(filterTerm.find(item => item === FILTER_PMT_METHOD_PAYPAL)))
            return "PayPal"
        else
            return null;
    }

    return (
        <>
            <h3 style={{ padding: "0 10px" }}>Filters</h3>
            <FilterBoxWrapper>
                <div className={filterTerm === FILTER_NONE && "active"} onClick={() => filterBasedOnParams()} >None</div>
                <div className={checkForPmtMethodFilter() && "active"} onClick={() => setFilterParams(params["Payment Method"])}>Payment Method { checkForPmtMethodFilter() && <span>{ checkForPmtMethodFilter() }</span> }</div>
                <div className={checkForGenderFilter() !== null ? "active" : ""} onClick={() => setFilterParams(params["Gender"])}> Gender { checkForGenderFilter() && <span>{checkForGenderFilter()}</span> } </div>
            </FilterBoxWrapper>
            {
                filterParams ? (
                    <FilterParamsModal>
                        <section className="content">
                            <span className="close" onClick={() => setFilterParams(null)}>
                                <img src={close} alt="close" />
                            </span>
                            { Object.keys(filterParams).map((param) => (
                                <div onClick={() => {
                                    filterParams[param]();
                                    setFilterParams(null)
                                }}>{ param }</div>
                            )) }
                        </section>
                    </FilterParamsModal>
                ) : null
            }
        </>
    )
}


const FilterParamsModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(13, 13, 13, .5);
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        position: relative;
        background: white;
        max-width: calc(100vw - 20px);
        max-height: calc(100vh - 10px);
        min-height: 300px;
        min-width: 300px;
        border-radius: 13px;
        padding: .56rem 1rem;
        display: flex;
        flex-flow: nowrap column;
        padding-top: 3.8rem;

        div {
            padding: .78rem .3rem;
            border-bottom: thin solid #eee;
            cursor: pointer;

            &:hover {
                background: rgba(13, 13, 13, .05)
            }

            &.active {
                background: dodgerblue;
            }
        }

        .close {
            width: 30px;
            height: 30px;
            position: absolute;
            right: 10px;
            top: 10px;
            background: #ff4172;
            color: white;
            padding: 1rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all ease-in-out 300ms;

            img {
                width: 20px;
            }

            &:hover {
                box-shadow: 0px 1px 5px #aaa;
            }
        }
    }
`

const FilterBoxWrapper = styled.div`
    display: flex;
    margin: 1.2rem auto;
    padding: 5px 10px;
    padding-top: 0;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 100%;
        height: 3px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius:10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(30, 143, 255, 0.549);
        border-radius:10px;
    }

    & > div {
        flex-shrink: 0;
        padding: .3rem .7rem;
        margin-right: 10px;
        background: rgba(30, 143, 255, 0.249);
        border-radius: .345rem;
        cursor: pointer;

        & > span {
            margin-left: 3px;
            border-left: thin #eee solid;
            padding-left: 5px;
        }

        &.active {
            background: dodgerblue;
            color: white;
        }
    }
`

export default FilterList;
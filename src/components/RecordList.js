import { useState } from "react";
import styled from "styled-components";
import { FILTER_NONE } from "../hooks/useFilter";
import RecordItem from "./RecordItem";
import RecordModal from "./RecordModal";
import FilterList from "./FilterList";

const RecordList = ({ data, page, pageNumbers, navigateToPage, onSearch, filterBasedOnParams, filterTerm=FILTER_NONE }) => {
    const [ selectedProfile, setSelectedProfile ] = useState(null);

    return (
        <RecordListWrapper>
            <header>
                <h2>Profiles</h2>
                <div>
                    <input onChange={onSearch} placeholder="Search for a record here..." />
                </div>
            </header>
            <FilterList filterTerm={filterTerm} filterBasedOnParams={filterBasedOnParams} />
            {
                data.length === 0 && (
                    <div className="no-field">No Record</div>
                )
            }
            {   data.map((item, index) => (
                <RecordItem key={`list-item-${index}`} item={item} onAction={() => setSelectedProfile(item)} />
            ))}
            <div className="pagination">
                <div>
                {
                    pageNumbers ? (
                        pageNumbers.map((num) => <span key={`page-num-${num}`} className={num === page ? 'active' : ''} onClick={() => navigateToPage(num)}>{ num }</span>)
                    ) : <></>
                }
                </div>
            </div>
            <RecordModal profile={selectedProfile} open={Boolean(selectedProfile)} onClose={() => setSelectedProfile(null)} />
        </RecordListWrapper>
    )
}


const RecordListWrapper = styled.div`
    width: 700px;
    max-width: calc(100% - 10px);
    margin: auto;

    header {
        padding: 5px 10px;
        h2 {
            font-size: calc(5vmin + 10px);
            color: dodgerblue;
        }
        div {
            input {
                width: 100%;
                outline: none;
                border: none;
                border-radius: 50px;
                background: rgba(13, 13, 13, 0.1);
                padding: 10px 13px;
                font-size: 16px;
            }
        }
    }

    .no-field {
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
    }

    .pagination {
        width: 100%;
        overflow-x: auto;
        padding: 10px 0;
        margin: 10px 0;
        margin-bottom: 4rem;

        &::-webkit-scrollbar {
            height: 7px;
            width: 100%;
        }

        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius:10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: blueviolet;
            border-radius:10px;
        }

        & > div {
            display: flex;
            flex-wrap: no-wrap;

            span {
                flex-shrink: 0;
                flex-grow: 0;
                padding: .67rem 1rem;
                margin-right: 10px;
                cursor: pointer;
                background: rgba(30, 143, 255, 0.249);

                &.active {
                    background: rgba(30, 143, 255, 0.849);
                }
            }
        }
    }
`

export default RecordList;
import { useEffect, useState } from "react"

export const FILTER_NONE = "no_filter"
export const FILTER_CREDIT_CARD_VISA = "filter_credit_card_visa"

export const FILTER_PMT_METHOD_CC = "filter_pmt_method_cc"
export const FILTER_PMT_METHOD_CHECK = "filter_pmt_method_check"
export const FILTER_PMT_METHOD_PAYPAL = "filter_pmt_method_paypal"
export const NO_FILTER_PMT = "no_filter_pmt"

export const FILTER_GENDER_MALE = "filter_gender_male"
export const FILTER_GENDER_FEMALE = "filter_gender_female"
export const NO_FILTER_GENDER = "no_filter_gender"


const useFilter = (data=[], params=FILTER_NONE) => {
    const [filteredData, setFilteredData] = useState(data);
    
    useEffect(() => {
        // Load params value
    }, [])
    
    useEffect(() => {
        if (params === FILTER_NONE)
            setFilteredData(data);
        else {
            console.log(params, "params")
            let result = data;
            for (let param of params) {
                if (param.includes("gender"))
                    result = filterBasedOnGender(result, param)
                if (param.includes("pmt"))
                    result = filterBasedOnPmt(result, param)
            }
            setFilteredData(result)
        }
    }, [params, data]);

    const filterBasedOnGender = (dataToSort, param) => {
        if (param === FILTER_GENDER_MALE) { // filter based on "male"
            return dataToSort.filter(item => item.Gender === "Male")
        } else if (param === FILTER_GENDER_FEMALE) { // filter based on "female"
            return dataToSort.filter(item => item.Gender === "Female")
        }
        return dataToSort
    }

    const filterBasedOnPmt = (dataToSort, param) => {
        if (param === FILTER_PMT_METHOD_CC) { // filter based on "male"
            return dataToSort.filter(item => item.PaymentMethod === "cc")
        } else if (param === FILTER_PMT_METHOD_CHECK) { // filter based on "female"
            return dataToSort.filter(item => item.PaymentMethod === "check")
        } else if (param === FILTER_PMT_METHOD_PAYPAL) { // filter based on "female"
            return dataToSort.filter(item => item.PaymentMethod === "paypal")
        }
        return dataToSort
    }

    return [filteredData]
    
}

export default useFilter;
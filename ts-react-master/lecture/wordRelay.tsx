import * as React from 'react';
import {useCallback,useState,useRef} from 'react';

const wordRealy=()=>{
    const [word,setWord]=useState('혀니')
    const [value,setValue]=useState('')
    const [result,setResult]=useState('')
    const inputEl=useRef<HTMLInputElement>(null)


    const onSF=useCallback((e:React.FormEvent<Element>)=>{
        e.preventDefault();
        const input=inputEl.current;
        if(word[word.length-1]===value[0]){
            setResult('Correct')
            setWord(value)
            setValue('')
            if(input){
                input.focus()
            }
        }else{
            setResult('wrong')
            setValue('')
            if(input){
                input.focus()
            }
        }
    },[word,value])
    // const onSF = useCallback<(e: React.FormEvent) => void>((e) => {
    //     e.preventDefault();
    //     const input=inputEl.current;
    //     if(word[word.length-1]===value[0]){
    //         setResult('Correct')
    //         setWord(value)
    //         setValue('')
    //         if(input){
    //             input.focus()
    //         }
    //     }else{
    //         setResult('wrong')
    //         setValue('')
    //         if(input){
    //             input.focus()
    //         }
    //     }
    // },[word,value])
    const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) =>void>((e) => {
        setValue(e.currentTarget.value)
    }, []);

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSF}>
                <input
                    type="text"
                    ref={inputEl}
                    onChange={onChange}
                />
                <button>go</button>
            </form>
            <div>{result}</div>
        </>
    )
}

export default wordRealy;
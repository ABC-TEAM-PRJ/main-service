import {mapArr, mapArr2} from './mapArrData';
import { Tabs } from "flowbite-react";


const mapside = () => {
    const mapDataArr = [{
        id: 1,
        content: mapArr
    }]

    const mapDataArr2 = [{
        id: 2,
        content: mapArr2
    }]

    return (
        <div className="overflow-hidden relative h-full w-[600px] flex-initial flex flex-col border-none">
            <Tabs.Group
                aria-label="Tabs with underline"
                style="underline"
            >
                    <Tabs.Item title="서울">
                        {mapDataArr2.map((result) => {
                            return (
                                <div key={result.id}>
                                    <div>{result.content}</div>
                                </div>
                            );
                        })}
                    </Tabs.Item>
                
                <Tabs.Item title="중랑구">
                    {mapDataArr.map((result) => {
                        return (
                            <div key={result.id}>
                                <div>{result.content}</div>
                            </div>
                        );
                    })}
                </Tabs.Item>
                <Tabs.Item title="중구">
                    {mapDataArr2.map((result, index) => {
                        return (
                            <div key={result.id}>
                                <div>{result.content}</div>
                            </div>
                        );
                    })}
                </Tabs.Item>

            </Tabs.Group>
        </div>

    )
}

export default mapside

import React from 'react'

export default function Timeline({ timeLineList }) {
    return (
        <div className="timeline-list">
            {timeLineList.map((timeline) => (
                <div
                    className="timeline-item group flex justify-between min-h-[22rem] md:min-h-[17rem]"
                    key={timeline.id}
                >
                    <div className="timeline-date hidden md:block text-sm leading-none pt-6 mr-12 min-w-[150px]">
                        <span className="p-1 flex justify-center items-center text-gray-300 bg-primary bg-opacity-20 rounded-full">
                            {timeline.time}
                        </span>
                    </div>
                    <div className="timeline-main flex-1 pt-6 pl-12 border-l-4 border-white border-opacity-20 relative">
                        <div className=" absolute w-6 h-6 rounded-full border-4 border-white border-opacity-20 top-6 left-0 translate-x-[calc(-50%-2px)] transform z-10 flex justify-center items-center bg-section">
                            <div className="w-2 h-2 bg-primary shadow-md shadow-primary rounded-full hidden group-hover:block transition"></div>
                        </div>
                        <div className=" absolute w-20 h-1 bg-white bg-opacity-20 top-6 left-0 transform -translate-x-1/2 translate-y-[calc(0.75rem-2px)]"></div>
                        <div className="timeline-date block md:hidden text-sm leading-none max-w-[150px] mb-5">
                            <span className="p-1 flex justify-center items-center text-gray-300 bg-primary bg-opacity-20 rounded-full">
                                {timeline.time}
                            </span>
                        </div>
                        <h5 className="text-primary font-medium text-lg">
                            {timeline.title}
                        </h5>
                        <h6 className="mb-2 leading-6">{timeline.subTitle}</h6>
                        <div
                            className="text-gray-300"
                            dangerouslySetInnerHTML={{ __html: timeline.desc }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

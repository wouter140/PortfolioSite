import React from "react";

import ProjectPage from "../components/ProjectPage";
import {ProjectInfoTable} from "../components/InfoTables";
import {ContributionHighlights} from "../components/ContributionHighlights";

import image from "../../content/discord-presence-plugin/images/main-face.png";
import ProjectStartLayout from "../components/ProjectStartLayout";
import {WorkItemWithCarousel} from "../components/WorkItem";

export default React.memo(
    function WMemAllocator() {
        return (
            <ProjectPage
                title="WMem Allocator"
                imageURL={image}
            >
                <p>
                    During the final year of my game development study, I developed a custom C++ allocator for games.
                    The primary goal of developing the allocator was to learn about low level functionality like memory allocation and management, together with everything that comes with that.
                </p>
                <p>

                </p>

                <ProjectStartLayout>
                    <ContributionHighlights>
                        <li>Research</li>
                        <li>Design & Development</li>
                        <li>Pool & Multipool allocation strategies</li>
                        <li>Freelist allocation strategy</li>
                        <li>Optimized physical memory usage with virtual memory</li>
                        <li>Benchmarking</li>
                        <li>Implemented in test game</li>
                    </ContributionHighlights>

                    <ProjectInfoTable
                        languages="C++"
                        targetPlatforms="Windows"
                        release={(
                            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"
                               style={{color: "#007bff"}}>
                                Published on Github
                            </a>
                        )}
                    />
                </ProjectStartLayout>

                <WorkItemWithCarousel
                    id="research"
                    title="Research"
                    sources={[]}
                    // sources={[
                    //     uiOptionsExampleVideo,
                    //     mainMenuVideo,
                    // ]}
                >
                    <p>
                        I started the project with researching the requirements for the allocator and the various topics about memory management and memory allocation that I needed to know.
                    </p>
                    <p>
                        Some of the topics I researched are:
                    </p>
                    <ul>
                        <li>Typical game allocation patterns</li>
                        <li>Memory Alignment</li>
                        <li>Memory Fragmentation</li>
                        <li>Multithreaded Allocations</li>
                        <li>Virtual Memory</li>
                        <li>Stack, pool, multipool and freelist allocation strategies</li>
                    </ul>
                </WorkItemWithCarousel>

                <WorkItemWithCarousel
                    id="design-development"
                    title="Design & Development"
                    carouselBefore
                    sources={[]}
                    // sources={[
                    //     uiOptionsExampleVideo,
                    //     mainMenuVideo,
                    // ]}
                >
                    <p>
                        After the research, I designed the allocator and its implementation with UML diagrams.
                        These design diagrams can be seen in the images to the side.
                    </p>
                    <p>
                        I designed the different allocation strategies with their dependencies and uses as a clear overview.
                        The design allowed for feedback and changes to be incorporated before implementing the actual allocator.
                    </p>
                </WorkItemWithCarousel>

                <WorkItemWithCarousel
                    id="virtual-memory"
                    title="Optimized physical memory"
                    sources={[]}
                    // sources={[
                    //     uiOptionsExampleVideo,
                    //     mainMenuVideo,
                    // ]}
                >
                    <p>
                        The allocator internally only reserves virtual memory regions and commits the pages to physical memory as they become used.
                        When a page is no longer used, it is released back to the system.
                        This means the allocator only has the minimal amount of physical memory committed that is actually being used.
                        Dynamically resizing of the internal heaps also leads to little wastage of memory in the allocator.
                    </p>
                </WorkItemWithCarousel>

                <WorkItemWithCarousel
                    id="pool-allocation-strategies"
                    title="Pool & Multipool allocation strategies"
                    carouselBefore
                    sources={[]}
                    // sources={[
                    //     uiOptionsExampleVideo,
                    //     mainMenuVideo,
                    // ]}
                >
                    <p>
                        Two of the allocation strategies that I developed in the allocator are the pool and multipool strategies.
                        Internally, the multipool uses multiple pool allocation strategies of different sizes and determines the best pool allocator to use for each allocation.
                    </p>
                    <p>
                        The pool allocator internally stores a freelist of free blocks. This makes the pool allocation strategy very fast to allocate and free blocks of memory.
                        When there are no free blocks available in the pool allocator, the pool allocator requests a new range of virtual memory and maps that to physical memory.
                        The pool allocator then divides the new memory into blocks that are linked together so they can be used.
                        The pool allocator also keeps track of the amount of free blocks in a range of memory, so that when a range is completely free, it can be unmapped and the physical memory reused.
                    </p>
                </WorkItemWithCarousel>

                <WorkItemWithCarousel
                    id="freelist-allocation-strategy"
                    title="Freelist allocation strategy"
                    carouselBefore
                    sources={[]}
                    // sources={[
                    //     uiOptionsExampleVideo,
                    //     mainMenuVideo,
                    // ]}
                >
                    <p>
                        Another allocation strategy I developed is the freelist strategy.
                        The freelist strategy works different from the pool strategies as it allows any size allocation and allocated using a linked list of free blocks.
                    </p>
                    <p>
                        The freelist also used virtual memory to request a range of memory to use.
                        When the freelist allocates a block of memory, it only maps the required pages that are used by the allocation to physical memory.
                        When an allocation is freed, the pages that the memory used are released from physical memory.
                        This not only minimized physical memory usage, but also decreases physical memory fragmentation.
                        To further decrease fragmentation, the freelist attempts to coalesce neighbouring blocks to create larger free blocks.
                    </p>
                    <p>
                        The freelist uses a first-fit search algorithm, which searches for a free block from the start of the region.
                        The first-fit algorithm minimizes fragmentation and memory utilization by prioritizing memory at the start of the region.
                        I plan to add next-fit and best-fit search algorithms to further improve and balance speed, fragmentation and memory usage.
                    </p>
                </WorkItemWithCarousel>

                <WorkItemWithCarousel
                    id="game-implementation"
                    title="Implementation in test game"
                    sources={[]}
                    // sources={[
                    //     uiOptionsExampleVideo,
                    //     mainMenuVideo,
                    // ]}
                >
                    <p>
                        One of the goals of the allocator is that it should be easy to implement into a game or engine.
                        Games or engines are large projects with a lot of code, so making it easy to implement is a must.
                    </p>
                    <p>
                        To satisfy this requirement I added a option that overrides the global new and delete operators.
                        The overridden new and delete use the custom allocator to allocate and free memory.
                        I chose overriding of new and delete for this as by default C++ uses these in most of its code.
                        If the codebase does not use the C malloc and free or custom allocations, new and delete will override the allocation.
                        New and delete is also used by default in the C++ standard containers which means these are also using the custom allocator.
                    </p>
                    <p>
                        I created a general allocator which is optimized to allocate all sorts of sizes to be used in the overriden new and delete.
                        Internally the general allocator has multiple of the above allocation strategies with different page and region sizes.
                        The general allocator determines which allocator is the best for the allocation by its requested size.
                        Using multiple allocation strategies with different page and region sizes also minimizes fragmentation problems in the allocator by separating large size-differences.
                    </p>
                </WorkItemWithCarousel>

                <WorkItemWithCarousel
                    id="benchmarking"
                    title="Benchmarking"
                    carouselBefore
                    sources={[]}
                    // sources={[
                    //     uiOptionsExampleVideo,
                    //     mainMenuVideo,
                    // ]}
                >
                    <p>
                        
                    </p>
                </WorkItemWithCarousel>
            </ProjectPage>
        )
    }
);
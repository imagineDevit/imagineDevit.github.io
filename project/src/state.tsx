import {PLang, Project} from "./models";

const link = (url: string, text: string) => {
    return <strong><a href={url} target={'_blank'}>{text}</a></strong>
}

export const libs: Project[] = [
    {
        name: 'giwt-core',
        lang: PLang.JAVA,
        description: <>
            The core module of <strong>Giwt</strong> <i>test engine</i> that provides shared classes and interfaces
            for <strong>Java</strong> and <strong>Kotlin</strong> implementations.
        </>,
        github: {
            url: 'https://github.com/imagineDevit/giwt-core'
        },
        site: undefined,
        keywords: [
            'giwt',
            'Java',
            'JUnit',
            'testing',
            'test engine',
            'given-when-then',
            'tests',
            'unit test',
            'integration test'
        ],
        version: {
            badgeSrc: 'https://img.shields.io/maven-central/v/io.github.imagineDevit/giwt-core?color=%235B83CC',
            url: 'https://central.sonatype.com/artifact/io.github.imagineDevit/giwt-core/overview'
        }
    },
    {
        name: 'giwt',
        lang: PLang.JAVA,
        description: <>
            A test engine based on {link('https://junit.org/', 'JUnit platform')} that allows Java developers to write
            tests
            in <strong><i>given - when - then</i></strong> format.
        </>,
        github: {
            url: 'https://github.com/imagineDevit/giwt'
        },
        site: {
            url: 'https://imaginedevit.github.io/giwt-docs/'
        },
        keywords: [
            'giwt',
            'Java',
            'JUnit',
            'testing',
            'test engine',
            'given-when-then',
            'tests',
            'unit test',
            'integration test'
        ],
        version: {
            badgeSrc: 'https://img.shields.io/maven-central/v/io.github.imagineDevit/giwt?color=%235B83CC',
            url: 'https://central.sonatype.com/artifact/io.github.imagineDevit/giwt/overview'
        }
    },
    {
        name: 'giwt-kt',
        lang: PLang.KOTLIN,
        description: <>
            A test engine based on {link('https://junit.org/', 'JUnit platform')} that allows Kotlin developers to write
            tests
            in <strong><i>given - when - then</i></strong> format.
        </>,
        github: {
            url: 'https://github.com/imagineDevit/giwt-kt'
        },
        site: {
            url: 'https://imaginedevit.github.io/giwt-docs/'
        },
        keywords: [
            'giwt',
            'Kotlin',
            'JUnit',
            'testing',
            'test engine',
            'given-when-then',
            'tests',
            'unit test',
            'integration test'],
        version: {
            badgeSrc: 'https://img.shields.io/maven-central/v/io.github.imagineDevit/giwt-kt?color=%235B83CC',
            url: 'https://central.sonatype.com/artifact/io.github.imagineDevit/giwt-kt/overview'
        }
    },
    {
        name: 'edgedb-query',
        lang: PLang.RUST,
        description: <>
            A rust crate that provides <code>structs</code> and <code>traits</code>
            used in {link('https://crates.io/crates/edgedb-query-derive', 'edgedb-query-derive')} crate.
        </>,
        github: {
            url: 'https://github.com/imagineDevit/edgedb'
        },
        site: undefined,
        keywords: [
            'Rust',
            'edgedb',
            'database',
            'query',
            'queries'],
        version: {
            badgeSrc: 'https://img.shields.io/crates/v/edgedb-query?color=%235B83CC',
            url: 'https://crates.io/crates/edgedb-query'
        }

    },
    {
        name: 'edgedb-query-derive',
        lang: PLang.RUST,
        description: <>
            A Rust crate that provides attribute macros that facilitate writing
            of {link('https://docs.edgedb.com/tutorial', 'edgeDB')} queries when
            using {link('https://github.com/edgedb/edgedb-rust', 'edgedb-rust')} crate.
        </>,
        github: {
            url: 'https://github.com/imagineDevit/edgedb'
        },
        site: {
            url: 'https://imaginedevit.github.io/edgedb/'
        },
        keywords: [
            'Rust',
            'edgedb',
            'database',
            'procedural macros',
            'derive',
            'query',
            'queries'],
        version: {
            badgeSrc: 'https://img.shields.io/crates/v/edgedb-query-derive?color=%235B83CC',
            url: 'https://crates.io/crates/edgedb-query-derive'
        }

    }
]

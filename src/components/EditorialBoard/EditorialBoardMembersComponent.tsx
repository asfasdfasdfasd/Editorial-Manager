import React, { useState, useMemo, useCallback } from 'react';
import {
    FaUsers,
    FaUserTie,
    FaEnvelope,
    FaPhone,
    FaMagnifyingGlass,
    FaXmark,
    FaBookOpen,
    FaUserCheck,
    FaBuildingColumns,
    FaChevronDown,
    FaCopy,
    FaCheck,
} from 'react-icons/fa6';

interface Member {
    name: string;
    designation: string;
    department?: string;
    institution: string;
    specialization?: string;
    email: string;
    mobile?: string;
}

interface Section {
    id: string;
    title: string;
    icon: React.ReactNode;
    members: Member[];
}

const sections: Section[] = [
    {
        id: 'eic',
        title: 'Editor-In-Chief',
        icon: <FaUserTie />,
        members: [
            {
                name: 'Dr. Amit Goel',
                designation: 'Professor',
                institution: 'Swami Vivekanand Institute of Pharmacy, Chandigarh-Patiala National Highway, Ramnagar, near Banur, Rajpura Tehsil-Patiala, Punjab-140601',
                email: 'principalsvip@sviet.ac.in',
                mobile: '9914100231',
            },
        ],
    },
    {
        id: 'editor',
        title: 'Editor',
        icon: <FaUserTie />,
        members: [
            {
                name: 'Mr. Anshu Gupta',
                designation: 'Associate Professor',
                institution: 'Swami Vivekanand College of Pharmacy, Chandigarh-Patiala National Highway, Ramnagar, near Banur, Rajpura Tehsil-Patiala, Punjab-140601',
                email: 'guptanshu2@gmail.com',
                mobile: '9417141755',
            },
        ],
    },
    {
        id: 'chief-assoc',
        title: 'Chief-Associate Editor',
        icon: <FaUserTie />,
        members: [
            {
                name: 'Dr. Meenakshi Rana',
                designation: 'Associate Professor',
                department: 'Department of Pharmaceutical Chemistry',
                institution: 'Swami Vivekanand College of Pharmacy, Banur, Rajpura, Punjab.',
                email: 'meenakshi87rana@gmail.com',
            },
        ],
    },
    {
        id: 'assoc-editor',
        title: 'Associate Editor',
        icon: <FaUserTie />,
        members: [
            {
                name: 'Dr. Damit Kumar',
                designation: 'Associate Professor',
                department: 'Department of Pharmaceutics',
                institution: 'Swami Vivekanand College of Pharmacy, Banur, Rajpura, Punjab.',
                email: 'damitdhiman007@gmail.com',
            },
            {
                name: 'Dr. Kapil Kumar Verma',
                designation: 'Professor & Principal',
                specialization: 'Pharmacology',
                institution: 'Minerva College of Pharmacy, Indora-Kangra Himachal Pradesh.',
                email: 'kkvmpharm09@gmail.com',
            },
        ],
    },
    {
        id: 'publication',
        title: 'Publication Committee',
        icon: <FaBookOpen />,
        members: [
            {
                name: 'Dr. Nikita khera',
                designation: 'Assistant Professor',
                department: 'Department of Pharmacy Practice',
                institution: 'Swami Vivekanand College of Pharmacy, Banur, Rajpura, Punjab.',
                email: 'nikeetakhera02@gmail.com',
            },
            {
                name: 'Mr. Manjul Singla',
                designation: 'Assistant Professor',
                department: 'Department of Radiology',
                institution: 'Swami Vivekanand Faculty of Technology & Management, Banur, Rajpura.',
                email: 'hodradiology@sviet.ac.in',
            },
            {
                name: 'Dr. Himani Punia',
                designation: 'Assistant Professor',
                department: 'Head, Allied Health Sciences',
                institution: 'Saraswati Group of Colleges, Mohali, Punjab.',
                email: 'puniahimani@hau.ac.in',
            },
            {
                name: 'Ms. Tamanna Dhiman',
                designation: 'Assistant Professor',
                department: 'Department of Pharmacognosy',
                institution: 'Swami Vivekanand College of Pharmacy, Banur, Rajpura, Punjab.',
                email: 'tamannadhiman61@gmail.com',
            },
        ],
    },
    {
        id: 'board',
        title: 'Editorial Board Member',
        icon: <FaBuildingColumns />,
        members: [
            {
                name: 'Dr. Rajeev Garg',
                designation: 'Principal',
                specialization: 'Pharmaceutics',
                institution: 'Guru Nanak Institute of Pharmacy, Delewal, Hoshiarpur, Punjab.',
                email: 'rgpharma@gmail.com',
            },
            {
                name: 'Dr. Nishant Thakur',
                designation: 'Associate Professor',
                department: 'Department of Pharmaceutics',
                institution: 'University Institute of Pharma Sciences, Chandigarh University, Gharuan, Mohali, Punjab.',
                email: 'nishant.nt21@gmail.com',
            },
            {
                name: 'Dr. Anjali',
                designation: 'Professor',
                department: 'Department of Pharmaceutical Chemistry',
                institution: 'Desh Bhagat University, Mandi Gobindgarh, Punjab.',
                email: 'anjalipharm1985@gmail.com',
            },
            {
                name: 'Dr. Parminder Kaur',
                designation: 'Associate Professor',
                department: 'Department of Pharmaceutical Chemistry',
                institution: 'University Institute of Pharma Sciences, Chandigarh University, Gharuan Mohali, Punjab.',
                email: 'hundalparminder275@gmail.com',
            },
            {
                name: 'Dr. Anu Jindal',
                designation: 'Professor',
                department: 'Department of Pharmacology',
                institution: 'GHG Khalsa College of Pharmacy, Gurusar Sadhar, Ludhiana, Punjab.',
                email: 'anumahajan78@gmail.com',
            },
            {
                name: 'Dr. Ravi Ranjan Kumar',
                designation: 'Associate Professor',
                institution: 'University School of Allied Health Sciences, Rayat Bahra University, Mohali, Punjab.',
                email: 'raviranjan.jnu10@gmail.com',
            },
            {
                name: 'Dr. Nadeem Khan',
                designation: 'Professor',
                department: 'Department of Pharmacology',
                institution: 'College of Pharmacy, RIMT University, Mandi Gobindgarh, Punjab.',
                email: 'nadeem_khansre@yahoo.com',
            },
            {
                name: 'Dr. Puneet Utreja',
                designation: 'Professor',
                department: 'Department of Pharmaceutics',
                institution: 'PCTE group of institute Ludhiana, Punjab.',
                email: 'drutreja@gmail.com',
            },
            {
                name: 'Dr. Jaspreet Kaur',
                designation: 'Professor and Principal',
                specialization: 'Pharmacognosy',
                institution: 'College of Pharmacy, RIMT University, Mandi Gobindgarh, Punjab.',
                email: 'principal.cop@rimt.ac.in',
            },
            {
                name: 'Dr. Vandana Kharb',
                designation: 'Professor',
                department: 'Department of Pharmaceutics',
                institution: 'Sachdeva College of Pharmacy, Gharuan, Punjab.',
                email: 'vandana_pharmaceutics@yahoo.co.in',
            },
            {
                name: 'Dr. Balbir Singh',
                designation: 'Professor',
                department: 'Department of Pharmacognosy',
                institution: 'Guru Nanak Dev University, Amritsar, Punjab.',
                email: 'balbir.pharma@gndu.ac.in',
            },
            {
                name: 'Dr. Neha Srivastava',
                designation: 'Professor',
                department: 'School of Pharmaceutics',
                institution: 'RIMT University, Mandi Gobindgarh, Punjab.',
                email: 'nehasrvstva@gmail.com',
            },
            {
                name: 'Dr. Ritchubabbar',
                designation: 'Professor',
                department: 'Department of Pharmaceutical Chemistry',
                institution: 'Chitkara School of Pharmacy, Chitkara University Punjab.',
                email: 'ritchu.babbar@chitkara.edu.in',
            },
            {
                name: 'Dr. Pardeep Goyal',
                designation: 'Professor and Principal',
                department: 'Department of Pharmacology',
                institution: 'Saraswati College of Pharmacy, Gharuan, Punjab.',
                email: 'golupharma1982@gmail.com',
            },
            {
                name: 'Dr. Sourabh Kosey',
                designation: 'Professor',
                department: 'Department of Pharmacy Practice',
                institution: 'ISF College of Pharmacy, Moga, Punjab.',
                email: 'sourabhkosey@gmail.com',
            },
            {
                name: 'Dr. Sanjay Kumar',
                designation: 'Director cum Principal',
                specialization: 'Pharmacognosy and Photochemistry',
                institution: 'Gautam college of Pharmacy Hamirpur, Himachal Pradesh.',
                email: 'diwansanjay1981@gmail.com',
            },
            {
                name: 'Dr. Parminder Nain',
                designation: 'Professor and Dean',
                specialization: 'Pharmacy Practice',
                department: 'School of Pharmaceutical Sciences, Department of Pharmacy Practice',
                institution: 'RIMT University, Mandi Gobindgarh, Punjab.',
                email: 'parminder.nain29@gmail.com',
            },
            {
                name: 'Dr. Neelam',
                designation: 'Professor',
                department: 'Department of Pharmaceutics',
                institution: 'MM College of Pharmacy, Mullana, Ambala, Haryana.',
                email: 'neelam.mdu@glmail.com',
            },
            {
                name: 'Dr. Vivek Sharma',
                designation: 'Professor (Health Sciences)',
                institution: 'CSIR-IHBT University Centre For Research and Development, Chandigarh University, Gharuan, Chandigarh.',
                email: 'nkvivek@gmail.com',
            },
            {
                name: 'Dr. Santosh Kumar Verma',
                designation: 'Professor and Principal',
                specialization: 'Pharmacology and Toxicology',
                department: 'School of Health Sciences',
                institution: 'Quantum University, Roorkee, Uttrakhand.',
                email: 'verma2us@gmail.com',
            },
        ],
    },
    {
        id: 'reviewer',
        title: 'Reviewer Advisory Committee',
        icon: <FaUserCheck />,
        members: [
            {
                name: 'Dr. Subheet Kumar Jain',
                designation: 'Professor',
                department: 'Department of Pharmaceutical Sciences',
                institution: 'Guru Nanak Dev University, Amritsar, Punjab.',
                email: 'subhjeetjain.pharma@gndu.ac.in',
            },
            {
                name: 'Dr. Sandeep Chaudhary',
                designation: 'Professor',
                department: 'Department of Pharmaceutics',
                institution: 'ASBASJSM College of Pharmacy, Bela, Punjab.',
                email: 'drsandeeprajpura@gmail.com',
            },
            {
                name: 'Dr. Suraj Bansal',
                designation: 'Professor and Principal',
                specialization: 'Pharmaceutical Chemistry',
                institution: 'JIS Institute of Pharmacy, Ludhiana, Punjab.',
                email: 'banaalsuraj@gmail.com',
            },
            {
                name: 'Dr. Jagdeep Singh Dua',
                designation: 'Associate Professor',
                department: 'Department of Pharmaceutics',
                institution: 'Shivalik College of Pharmacy Nangal Punjab.',
                email: 'jsdua2002@yahoo.com',
            },
            {
                name: 'Dr. Jyoti Monga',
                designation: 'Associate Professor',
                department: 'Department of Pharmaceutical Chemistry',
                institution: 'Ch.Devi Lal College of Pharmacy, Jagadhri, Haryana.',
                email: 'mongajyoti10@gmail.com',
            },
        ],
    },
];

// Flatten all members with their section info for searching
const allMembers = sections.flatMap(s =>
    s.members.map(m => ({ ...m, sectionTitle: s.title, sectionId: s.id }))
);

function getInitials(name: string) {
    return name
        .replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.|Prof\.)\s*/i, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(n => n[0])
        .join('')
        .toUpperCase();
}

const sectionColors: Record<string, string> = {
    eic: 'bg-slate-900 text-white',
    editor: 'bg-slate-700 text-white',
    'chief-assoc': 'bg-blue-700 text-white',
    'assoc-editor': 'bg-blue-500 text-white',
    publication: 'bg-amber-600 text-white',
    board: 'bg-indigo-600 text-white',
    reviewer: 'bg-emerald-600 text-white',
};

const sectionAccent: Record<string, string> = {
    eic: 'border-l-slate-900',
    editor: 'border-l-slate-700',
    'chief-assoc': 'border-l-blue-700',
    'assoc-editor': 'border-l-blue-500',
    publication: 'border-l-amber-500',
    board: 'border-l-indigo-500',
    reviewer: 'border-l-emerald-500',
};

const sectionBg: Record<string, string> = {
    eic: 'bg-slate-50',
    editor: 'bg-slate-50',
    'chief-assoc': 'bg-blue-50/40',
    'assoc-editor': 'bg-blue-50/30',
    publication: 'bg-amber-50/30',
    board: 'bg-indigo-50/30',
    reviewer: 'bg-emerald-50/30',
};

// ─── Copy Button ─────────────────────────────────────────────────────────────
function CopyBtn({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, [text]);

    return (
        <button
            type="button"
            onClick={handleCopy}
            title={copied ? 'Copied!' : `Copy ${text}`}
            aria-label={copied ? 'Copied!' : `Copy ${text}`}
            className={`inline-flex items-center justify-center h-5 w-5 rounded transition-all duration-150 cursor-pointer shrink-0
                ${copied
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700'
                }`}
        >
            {copied
                ? <FaCheck className="size-2.5" />
                : <FaCopy className="size-2.5" />
            }
        </button>
    );
}

// ─── Member Card ────────────────────────────────────────────────────────────
interface MemberCardProps {
    member: Member;
    sectionId: string;
    highlight?: string;
    sectionLabel?: string;
}

function MemberCard({ member, sectionId, highlight, sectionLabel }: MemberCardProps) {
    const initials = getInitials(member.name);
    const avatarColor = sectionColors[sectionId] ?? 'bg-slate-700 text-white';
    const accentBorder = sectionAccent[sectionId] ?? 'border-l-slate-400';
    const bgColor = sectionBg[sectionId] ?? 'bg-slate-50';

    const hl = (text: string) => {
        if (!highlight || !text) return text;
        const idx = text.toLowerCase().indexOf(highlight.toLowerCase());
        if (idx === -1) return text;
        return (
            <>
                {text.slice(0, idx)}
                <mark className="bg-yellow-200 text-yellow-900 rounded px-0.5">
                    {text.slice(idx, idx + highlight.length)}
                </mark>
                {text.slice(idx + highlight.length)}
            </>
        );
    };

    return (
        <div className={`group relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-200 border-l-4 ${accentBorder}`}>
            {/* Header strip */}
            <div className={`${bgColor} px-4 pt-4 pb-3 flex items-start gap-3`}>
                {/* Avatar */}
                <div className={`shrink-0 h-11 w-11 rounded-lg ${avatarColor} flex items-center justify-center text-sm font-bold shadow-sm`}>
                    {initials}
                </div>
                {/* Name & Designation */}
                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                            {hl(member.name)}
                        </h3>
                        {sectionLabel && (
                            <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${sectionColors[sectionId] ?? 'bg-slate-700 text-white'}`}>
                                {sectionLabel}
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-0.5 leading-snug">
                        {member.designation}
                    </p>
                    {(member.department || member.specialization) && (
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {member.department ?? `Specialization: ${member.specialization}`}
                        </p>
                    )}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Institution */}
            <div className="px-4 py-3">
                <p className="text-[11px] text-slate-600 leading-relaxed">
                    {member.institution}
                </p>
            </div>

            {/* Footer: contacts */}
            <div className="border-t border-slate-100 px-4 py-2.5 flex flex-col gap-2">
                {/* Email row */}
                <div className="flex items-center gap-2">
                    <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors break-all"
                    >
                        <FaEnvelope className="size-3 shrink-0 text-blue-400" />
                        <span>{hl(member.email)}</span>
                    </a>
                    <CopyBtn text={member.email} />
                </div>
                {/* Mobile row */}
                {member.mobile && (
                    <div className="flex items-center gap-2">
                        <a
                            href={`tel:${member.mobile}`}
                            className="inline-flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <FaPhone className="size-3 shrink-0 text-slate-400" />
                            <span>{hl(member.mobile)}</span>
                        </a>
                        <CopyBtn text={member.mobile} />
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── Collapsible Section ────────────────────────────────────────────────────
interface SectionBlockProps {
    section: Section;
    highlight?: string;
    defaultOpen?: boolean;
}

function SectionBlock({ section, highlight, defaultOpen = true }: SectionBlockProps) {
    const [open, setOpen] = useState(defaultOpen);
    const pillColor = sectionColors[section.id] ?? 'bg-slate-700 text-white';

    return (
        <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            {/* Section header — clickable to collapse */}
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-white hover:bg-slate-50 transition-colors text-left"
            >
                <div className="flex items-center gap-3">
                    <span className={`p-2 rounded-lg text-sm ${pillColor}`}>
                        {section.icon}
                    </span>
                    <div>
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                            {section.title}
                        </span>
                        <span className="ml-2.5 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            {section.members.length}
                        </span>
                    </div>
                </div>
                <FaChevronDown
                    className={`size-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Members grid */}
            {open && (
                <div className="border-t border-slate-100 bg-slate-50/50 p-4">
                    <div className={`grid gap-4 ${section.members.length === 1 ? 'grid-cols-1 max-w-xl' : 'grid-cols-1 sm:grid-cols-2'}`}>
                        {section.members.map((m, i) => (
                            <MemberCard
                                key={i}
                                member={m}
                                sectionId={section.id}
                                highlight={highlight}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Main Component ─────────────────────────────────────────────────────────
const EditorialBoardMembersComponent: React.FC = () => {
    const [query, setQuery] = useState('');

    const trimmed = query.trim();

    // When search is active: show flat filtered list across all sections
    const searchResults = useMemo(() => {
        if (!trimmed) return null;
        const q = trimmed.toLowerCase();
        return allMembers.filter(m =>
            m.name.toLowerCase().includes(q) ||
            m.email.toLowerCase().includes(q) ||
            (m.mobile && m.mobile.includes(q)) ||
            m.designation.toLowerCase().includes(q) ||
            (m.department && m.department.toLowerCase().includes(q)) ||
            (m.specialization && m.specialization.toLowerCase().includes(q)) ||
            m.institution.toLowerCase().includes(q)
        );
    }, [trimmed]);

    return (
        <div className="max-w-5xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">

            {/* ── Page Header ── */}
            <div className="border-b border-slate-200 pb-5 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                    <FaUsers className="text-slate-700 size-7" /> Editorial Board Members
                </h1>
                <p className="text-xs md:text-sm text-slate-500 mt-2">
                    Journal of Advanced Pharmaceutical and Health Sciences Education &amp; Research (JAPHSER)
                </p>
            </div>

            {/* ── Search Bar ── */}
            <div className="mb-8">
                <div className="relative">
                    <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-4 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search by name, email, mobile, institution, department..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-xs transition-all"
                    />
                    {query && (
                        <button
                            type="button"
                            onClick={() => setQuery('')}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 transition-colors"
                            aria-label="Clear search"
                        >
                            <FaXmark className="size-4" />
                        </button>
                    )}
                </div>

                {/* Search hint pills */}
                {!query && (
                    <div className="flex flex-wrap gap-2 mt-2.5">
                        {['Professor', 'Pharmaceutics', 'Pharmacology', 'Punjab', 'gmail.com'].map(hint => (
                            <button
                                key={hint}
                                type="button"
                                onClick={() => setQuery(hint)}
                                className="text-[11px] text-slate-500 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-full transition-colors"
                            >
                                {hint}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Search Results View ── */}
            {searchResults !== null ? (
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-slate-600">
                            {searchResults.length === 0
                                ? 'No results found.'
                                : <><strong className="text-slate-900">{searchResults.length}</strong> member{searchResults.length !== 1 ? 's' : ''} found</>
                            }
                        </p>
                        <button
                            type="button"
                            onClick={() => setQuery('')}
                            className="text-xs text-blue-600 hover:underline font-medium"
                        >
                            Clear search
                        </button>
                    </div>

                    {searchResults.length === 0 ? (
                        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
                            <FaMagnifyingGlass className="size-8 text-slate-300 mx-auto mb-3" />
                            <p className="text-sm font-semibold text-slate-700 mb-1">No members matched "{trimmed}"</p>
                            <p className="text-xs text-slate-500">Try searching by name, email, phone, department, or institution.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {searchResults.map((m, i) => (
                                <MemberCard
                                    key={i}
                                    member={m}
                                    sectionId={m.sectionId}
                                    highlight={trimmed}
                                    sectionLabel={m.sectionTitle}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                /* ── Sections View (default) ── */
                <div className="space-y-4">
                    {sections.map(section => (
                        <SectionBlock
                            key={section.id}
                            section={section}
                            highlight={trimmed}
                            defaultOpen={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default EditorialBoardMembersComponent;

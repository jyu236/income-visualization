export enum MajorCategory {
    EDUCATION = 'Education',
    ARTS_AND_COMMUNICATIONS = 'Visual and performing arts, and communications technologies',
    HUMANITIES = 'Humanities',
    SOCIAL_SCIENCES_AND_LAW = 'Social and behavioural sciences and law',
    BUSINESS_AND_ADMINISTRATION = 'Business, management and public administration',
    PHYSICAL_AND_LIFE_SCIENCES = 'Physical and life sciences and technologies',
    MATHEMATICS_AND_COMPUTING = 'Mathematics, computer and information sciences',
    ARCHITECTURE_AND_ENGINEERING = 'Architecture, engineering, and related trades',
    AGRICULTURE_AND_RESOURCES = 'Agriculture, natural resources and conservation',
    HEALTH = 'Health and related fields',
    PERSONAL_AND_PROTECTIVE_SERVICES = 'Personal, protective and transportation services',
    OTHER = 'Other'
}

export function simplifyMajorCategory(majorCategory: MajorCategory): string {
    return majorCategory;
    switch (majorCategory) {
        case MajorCategory.EDUCATION:
            return "Education";
        case MajorCategory.ARTS_AND_COMMUNICATIONS:
            return "A & C";
        case MajorCategory.HUMANITIES:
            return "Human";
        case MajorCategory.SOCIAL_SCIENCES_AND_LAW:
            return "S & L";
        case MajorCategory.BUSINESS_AND_ADMINISTRATION:
            return "B & A";
        case MajorCategory.PHYSICAL_AND_LIFE_SCIENCES:
            return "P & L";
        case MajorCategory.MATHEMATICS_AND_COMPUTING:
            return "M & C";
        case MajorCategory.ARCHITECTURE_AND_ENGINEERING:
            return "A & E";
        case MajorCategory.AGRICULTURE_AND_RESOURCES:
            return "A & R";
        case MajorCategory.HEALTH:
            return "Health";
        case MajorCategory.PERSONAL_AND_PROTECTIVE_SERVICES:
            return "P & P";
        case MajorCategory.OTHER:
            return "Other";
        default:
            return majorCategory;
    }
}

export interface RawData {
    name: MajorCategory;
    data: Data;
    subSubCategories: SubSubCategory[];
}
  
export interface SubSubCategory {
    name: string;
    data: Data;
}

export interface Data {
    employment: number;
    medianIncome: number;
    averageIncome: number;
}

export const rawDataList: RawData[] = [
    {
        name: MajorCategory.EDUCATION,
        data: {
            employment: 764830,
            medianIncome: 53600,
            averageIncome: 55650
        },
        subSubCategories: [
            {
                name: "Education, general",
                data: {
                    employment: 438290,
                    medianIncome: 59600,
                    averageIncome: 58200
                }
            },
            {
                name: "Bilingual, multilingual and multicultural education",
                data: {
                    employment: 760,
                    medianIncome: 57600,
                    averageIncome: 61500
                }
            },
            {
                name: "Curriculum and instruction",
                data: {
                    employment: 2300,
                    medianIncome: 85000,
                    averageIncome: 72600
                }
            },
            {
                name: "Educational administration and supervision",
                data: {
                    employment: 15845,
                    medianIncome: 91000,
                    averageIncome: 79500
                }
            },
            {
                name: "Educational/instructional media design",
                data: {
                    employment: 2615,
                    medianIncome: 76500,
                    averageIncome: 72100
                }
            },
            {
                name: "Educational assessment, evaluation and research",
                data: {
                    employment: 600,
                    medianIncome: 77500,
                    averageIncome: 75200
                }
            },
            {
                name: "International and comparative education",
                data: {
                    employment: 230,
                    medianIncome: 62000,
                    averageIncome: 60800
                }
            },
            {
                name: "Social and philosophical foundations of education",
                data: {
                    employment: 480,
                    medianIncome: 74000,
                    averageIncome: 70400
                }
            },
            {
                name: "Special education and teaching",
                data: {
                    employment: 48820,
                    medianIncome: 44400,
                    averageIncome: 45560
                }
            },
            {
                name: "Student counselling and personnel services",
                data: {
                    employment: 9705,
                    medianIncome: 58400,
                    averageIncome: 57650
                }
            },
            {
                name: "Teacher education and professional development, specific levels and methods",
                data: {
                    employment: 81985,
                    medianIncome: 44000,
                    averageIncome: 48160
                }
            },
            {
                name: "Teacher education and professional development, specific subject areas",
                data: {
                    employment: 124940,
                    medianIncome: 60000,
                    averageIncome: 58150
                }
            },
            {
                name: "Teaching English or French as a second or foreign language",
                data: {
                    employment: 7055,
                    medianIncome: 43200,
                    averageIncome: 45880
                }
            },
            {
                name: "Teaching assistants/aides",
                data: {
                    employment: 27870,
                    medianIncome: 30400,
                    averageIncome: 31480
                }
            },
            {
                name: "Education, other",
                data: {
                    employment: 3320,
                    medianIncome: 24000,
                    averageIncome: 28040
                }
            }
        ]
    },
    {
        name: MajorCategory.ARTS_AND_COMMUNICATIONS,
        data: {
            employment: 498930,
            medianIncome: 30800,
            averageIncome: 40480
        },
        subSubCategories: [
            {
                name: "Communications technology/technician",
                data: {
                    employment: 1355,
                    medianIncome: 49600,
                    averageIncome: 52900
                }
            },
            {
                name: "Audiovisual communications technologies/technicians",
                data: {
                    employment: 16460,
                    medianIncome: 40800,
                    averageIncome: 46520
                }
            },
            {
                name: "Graphic communications",
                data: {
                    employment: 38175,
                    medianIncome: 42000,
                    averageIncome: 48800
                }
            },
            {
                name: "Communications technologies/technicians and support services, other",
                data: {
                    employment: 1490,
                    medianIncome: 27800,
                    averageIncome: 35400
                }
            },
            {
                name: "Visual, digital and performing arts, general",
                data: {
                    employment: 19585,
                    medianIncome: 24600,
                    averageIncome: 35400
                }
            },
            {
                name: "Crafts/craft design, folk art and artisanry",
                data: {
                    employment: 870,
                    medianIncome: 24600,
                    averageIncome: 31200
                }
            },
            {
                name: "Dance",
                data: {
                    employment: 5370,
                    medianIncome: 15600,
                    averageIncome: 29520
                }
            },
            {
                name: "Design and applied arts",
                data: {
                    employment: 164395,
                    medianIncome: 34800,
                    averageIncome: 42080
                }
            },
            {
                name: "Drama/theatre arts and stagecraft",
                data: {
                    employment: 36725,
                    medianIncome: 22400,
                    averageIncome: 34360
                }
            },
            {
                name: "Film/video and photographic arts",
                data: {
                    employment: 55785,
                    medianIncome: 29400,
                    averageIncome: 38960
                }
            },
            {
                name: "Fine arts and art studies",
                data: {
                    employment: 95935,
                    medianIncome: 29600,
                    averageIncome: 40920
                }
            },
            {
                name: "Music",
                data: {
                    employment: 59620,
                    medianIncome: 22200,
                    averageIncome: 35920
                }
            },
            {
                name: "Arts, entertainment, and media management",
                data: {
                    employment: 2745,
                    medianIncome: 36800,
                    averageIncome: 49920
                }
            },
            {
                name: "Community/environmental/socially-engaged art",
                data: {
                    employment: 50,
                    medianIncome: 17400,
                    averageIncome: 28000
                }
            },
            {
                name: "Visual and performing arts, other",
                data: {
                    employment: 360,
                    medianIncome: 20600,
                    averageIncome: 27300
                }
            }
        ]
    },
    {
        name: MajorCategory.HUMANITIES,
        data: {
            employment: 682270,
            medianIncome: 36800,
            averageIncome: 48640
        },
        subSubCategories: [
            {
                name: "Linguistic, comparative and related language studies and services",
                data: {
                    employment: 53805,
                    medianIncome: 39200,
                    averageIncome: 47360
                }
            },
            {
                name: "African languages, literatures and linguistics",
                data: {
                    employment: 50,
                    medianIncome: 10600,
                    averageIncome: 17500
                }
            },
            {
                name: "East Asian languages, literatures and linguistics",
                data: {
                    employment: 4490,
                    medianIncome: 20800,
                    averageIncome: 32040
                }
            },
            {
                name: "Slavic, Baltic and Albanian languages, literatures and linguistics",
                data: {
                    employment: 1425,
                    medianIncome: 29600,
                    averageIncome: 38680
                }
            },
            {
                name: "Germanic languages, literatures and linguistics",
                data: {
                    employment: 2215,
                    medianIncome: 34400,
                    averageIncome: 47080
                }
            },
            {
                name: "Modern Greek language and literature",
                data: {
                    employment: 50,
                    medianIncome: 40400,
                    averageIncome: 39000
                }
            },
            {
                name: "South Asian languages, literatures and linguistics",
                data: {
                    employment: 3270,
                    medianIncome: 21600,
                    averageIncome: 27680
                }
            },
            {
                name: "Iranian languages, literatures and linguistics",
                data: {
                    employment: 265,
                    medianIncome: 7500,
                    averageIncome: 19200
                }
            },
            {
                name: "Romance languages, literatures and linguistics",
                data: {
                    employment: 3620,
                    medianIncome: 40400,
                    averageIncome: 51850
                }
            },
            {
                name: "Indigenous languages, literatures, and linguistics of the Americas",
                data: {
                    employment: 375,
                    medianIncome: 43600,
                    averageIncome: 48800
                }
            },
            {
                name: "Middle/Near Eastern and Semitic languages, literatures and linguistics",
                data: {
                    employment: 830,
                    medianIncome: 14500,
                    averageIncome: 26300
                }
            },
            {
                name: "Classics and classical languages, literatures and linguistics",
                data: {
                    employment: 305,
                    medianIncome: 23400,
                    averageIncome: 40800
                }
            },
            {
                name: "Celtic languages, literatures and linguistics",
                data: {
                    employment: 25,
                    medianIncome: 0,
                    averageIncome: 24000
                }
            },
            {
                name: "Southeast Asian and Australasian/Pacific languages, literatures and linguistics",
                data: {
                    employment: 185,
                    medianIncome: 32400,
                    averageIncome: 38800
                }
            },
            {
                name: "Turkic, Uralic-Altaic, Caucasian and Central Asian languages, literatures and linguistics",
                data: {
                    employment: 90,
                    medianIncome: 14700,
                    averageIncome: 20400
                }
            },
            {
                name: "Sign language",
                data: {
                    employment: 1875,
                    medianIncome: 36000,
                    averageIncome: 38080
                }
            },
            {
                name: "Second language learning",
                data: {
                    employment: 1855,
                    medianIncome: 31400,
                    averageIncome: 37880
                }
            },
            {
                name: "Armenian languages, literatures, and linguistics",
                data: {
                    employment: 30,
                    medianIncome: 0,
                    averageIncome: 24000
                }
            },
            {
                name: "Indigenous and foreign languages, literatures and linguistics, other",
                data: {
                    employment: 580,
                    medianIncome: 20800,
                    averageIncome: 33600
                }
            },
            {
                name: "English language and literature, general",
                data: {
                    employment: 85115,
                    medianIncome: 41200,
                    averageIncome: 51850
                }
            },
            {
                name: "English rhetoric and composition/writing studies",
                data: {
                    employment: 7040,
                    medianIncome: 35200,
                    averageIncome: 42680
                }
            },
            {
                name: "English literature",
                data: {
                    employment: 39515,
                    medianIncome: 40000,
                    averageIncome: 52050
                }
            },
            {
                name: "English language and literature/letters, other",
                data: {
                    employment: 305,
                    medianIncome: 17600,
                    averageIncome: 29000
                }
            },
            {
                name: "Liberal arts and sciences, general studies and humanities",
                data: {
                    employment: 240980,
                    medianIncome: 30000,
                    averageIncome: 43040
                }
            },
            {
                name: "Medieval and renaissance studies",
                data: {
                    employment: 580,
                    medianIncome: 49200,
                    averageIncome: 58800
                }
            },
            {
                name: "Holocaust and related studies",
                data: {
                    employment: 15,
                    medianIncome: 0,
                    averageIncome: 32000
                }
            },
            {
                name: "Classical and ancient studies",
                data: {
                    employment: 4330,
                    medianIncome: 41200,
                    averageIncome: 53350
                }
            },
            {
                name: "Maritime studies",
                data: {
                    employment: 320,
                    medianIncome: 90000,
                    averageIncome: 86000
                }
            },
            {
                name: "History and language/literature",
                data: {
                    employment: 7370,
                    medianIncome: 45200,
                    averageIncome: 55100
                }
            },
            {
                name: "Linguistics and anthropology",
                data: {
                    employment: 140,
                    medianIncome: 27400,
                    averageIncome: 34500
                }
            },
            {
                name: "Integrated philosophy, politics, and economics",
                data: {
                    employment: 105,
                    medianIncome: 27800,
                    averageIncome: 57000
                }
            },
            {
                name: "Digital humanities and textual studies",
                data: {
                    employment: 115,
                    medianIncome: 23400,
                    averageIncome: 31200
                }
            },
            {
                name: "Thanatology",
                data: {
                    employment: 805,
                    medianIncome: 46400,
                    averageIncome: 51100
                }
            },
            {
                name: "Philosophy and religious studies, general",
                data: {
                    employment: 790,
                    medianIncome: 42400,
                    averageIncome: 49800
                }
            },
            {
                name: "Philosophy, logic and ethics",
                data: {
                    employment: 26110,
                    medianIncome: 44800,
                    averageIncome: 62150
                }
            },
            {
                name: "Religion/religious studies",
                data: {
                    employment: 15185,
                    medianIncome: 37600,
                    averageIncome: 46760
                }
            },
            {
                name: "Philosophy and religious studies, other",
                data: {
                    employment: 115,
                    medianIncome: 33600,
                    averageIncome: 39000
                }
            },
            {
                name: "Bible/Biblical studies",
                data: {
                    employment: 7765,
                    medianIncome: 30800,
                    averageIncome: 38760
                }
            },
            {
                name: "Missions/missionary studies and missiology",
                data: {
                    employment: 460,
                    medianIncome: 35600,
                    averageIncome: 46000
                }
            },
            {
                name: "Religious education",
                data: {
                    employment: 4910,
                    medianIncome: 36400,
                    averageIncome: 44960
                }
            },
            {
                name: "Religious music and worship",
                data: {
                    employment: 560,
                    medianIncome: 29800,
                    averageIncome: 36200
                }
            },
            {
                name: "Theological and ministerial studies",
                data: {
                    employment: 37770,
                    medianIncome: 42400,
                    averageIncome: 46240
                }
            },
            {
                name: "Pastoral counselling and specialized ministries",
                data: {
                    employment: 3910,
                    medianIncome: 38800,
                    averageIncome: 43240
                }
            },
            {
                name: "Religious institution administration and law",
                data: {
                    employment: 175,
                    medianIncome: 24800,
                    averageIncome: 29800
                }
            },
            {
                name: "Theology and religious vocations, other",
                data: {
                    employment: 485,
                    medianIncome: 41600,
                    averageIncome: 42000
                }
            },
            {
                name: "History",
                data: {
                    employment: 82300,
                    medianIncome: 50000,
                    averageIncome: 63200
                }
            },
            {
                name: "French language and literature, generalCAN",
                data: {
                    employment: 23905,
                    medianIncome: 40400,
                    averageIncome: 47880
                }
            },
            {
                name: "French rhetoric and composition/writing studiesCAN",
                data: {
                    employment: 1650,
                    medianIncome: 35200,
                    averageIncome: 41120
                }
            },
            {
                name: "French literatureCAN",
                data: {
                    employment: 13885,
                    medianIncome: 36800,
                    averageIncome: 45000
                }
            },
            {
                name: "French language and literature/letters, otherCAN",
                data: {
                    employment: 235,
                    medianIncome: 21600,
                    averageIncome: 29600
                }
            }
        ]
    },
    {
        name: MajorCategory.SOCIAL_SCIENCES_AND_LAW,
        data: {
            employment: 1620290,
            medianIncome: 44800,
            averageIncome: 60600
        },
        subSubCategories: [
            {
                name: "Area studies",
                data: {
                    employment: 11800,
                    medianIncome: 46000,
                    averageIncome: 54400
                }
            },
            {
                name: "Ethnic, cultural minority, gender, and group studies",
                data: {
                    employment: 11710,
                    medianIncome: 40400,
                    averageIncome: 46520
                }
            },
            {
                name: "Area, ethnic, cultural, gender, and group studies, other",
                data: {
                    employment: 0,
                    medianIncome: 0,
                    averageIncome: 0
                }
            },
            {
                name: "Communication and media studies",
                data: {
                    employment: 99905,
                    medianIncome: 46800,
                    averageIncome: 54900
                }
            },
            {
                name: "Journalism",
                data: {
                    employment: 39465,
                    medianIncome: 45600,
                    averageIncome: 54000
                }
            },
            {
                name: "Radio, television and digital communication",
                data: {
                    employment: 14120,
                    medianIncome: 43200,
                    averageIncome: 52600
                }
            },
            {
                name: "Public relations, advertising and applied communication",
                data: {
                    employment: 42180,
                    medianIncome: 46800,
                    averageIncome: 53950
                }
            },
            {
                name: "Publishing",
                data: {
                    employment: 1400,
                    medianIncome: 41600,
                    averageIncome: 45240
                }
            },
            {
                name: "Communication, journalism and related programs, other",
                data: {
                    employment: 2650,
                    medianIncome: 41200,
                    averageIncome: 47600
                }
            },
            {
                name: "Family and consumer sciences/human sciences, general",
                data: {
                    employment: 8910,
                    medianIncome: 30200,
                    averageIncome: 39400
                }
            },
            {
                name: "Family and consumer sciences/human sciences business services",
                data: {
                    employment: 2120,
                    medianIncome: 47200,
                    averageIncome: 54700
                }
            },
            {
                name: "Family and consumer economics and related services",
                data: {
                    employment: 50,
                    medianIncome: 26200,
                    averageIncome: 34000
                }
            },
            {
                name: "Foods, nutrition and related services",
                data: {
                    employment: 27180,
                    medianIncome: 39200,
                    averageIncome: 46360
                }
            },
            {
                name: "Housing and human environments",
                data: {
                    employment: 8705,
                    medianIncome: 27600,
                    averageIncome: 34600
                }
            },
            {
                name: "Human development, family studies and related services",
                data: {
                    employment: 201420,
                    medianIncome: 31600,
                    averageIncome: 33520
                }
            },
            {
                name: "Apparel and textiles",
                data: {
                    employment: 13785,
                    medianIncome: 23400,
                    averageIncome: 29920
                }
            },
            {
                name: "Work and family studies",
                data: {
                    employment: 1235,
                    medianIncome: 41600,
                    averageIncome: 54300
                }
            },
            {
                name: "Family and consumer sciences/human sciences, other",
                data: {
                    employment: 3250,
                    medianIncome: 40000,
                    averageIncome: 44600
                }
            },
            {
                name: "Non-professional legal studies",
                data: {
                    employment: 5250,
                    medianIncome: 41600,
                    averageIncome: 49720
                }
            },
            {
                name: "Law (LLB, JD, BCL)",
                data: {
                    employment: 128890,
                    medianIncome: 67500,
                    averageIncome: 108700
                }
            },
            {
                name: "Legal research and advanced professional studies (post-LLB/JD)",
                data: {
                    employment: 35615,
                    medianIncome: 69000,
                    averageIncome: 109800
                }
            },
            {
                name: "Legal support services",
                data: {
                    employment: 92250,
                    medianIncome: 44800,
                    averageIncome: 47240
                }
            },
            {
                name: "Legal professions and studies, other",
                data: {
                    employment: 280,
                    medianIncome: 66000,
                    averageIncome: 81000
                }
            },
            {
                name: "Peace studies and conflict resolution",
                data: {
                    employment: 3155,
                    medianIncome: 53600,
                    averageIncome: 59550
                }
            },
            {
                name: "Gerontology",
                data: {
                    employment: 6190,
                    medianIncome: 42800,
                    averageIncome: 46240
                }
            },
            {
                name: "Museology/museum studies",
                data: {
                    employment: 2740,
                    medianIncome: 42800,
                    averageIncome: 45360
                }
            },
            {
                name: "Science, technology and society",
                data: {
                    employment: 160,
                    medianIncome: 42000,
                    averageIncome: 47000
                }
            },
            {
                name: "Behavioural sciences",
                data: {
                    employment: 2935,
                    medianIncome: 36000,
                    averageIncome: 42280
                }
            },
            {
                name: "International/globalization studies",
                data: {
                    employment: 6150,
                    medianIncome: 37200,
                    averageIncome: 44520
                }
            },
            {
                name: "Intercultural/multicultural and diversity studies",
                data: {
                    employment: 855,
                    medianIncome: 32400,
                    averageIncome: 41600
                }
            },
            {
                name: "Cognitive science",
                data: {
                    employment: 1765,
                    medianIncome: 31000,
                    averageIncome: 46320
                }
            },
            {
                name: "Cultural studies/critical theory and analysis",
                data: {
                    employment: 2525,
                    medianIncome: 36400,
                    averageIncome: 44200
                }
            },
            {
                name: "Dispute resolution",
                data: {
                    employment: 1010,
                    medianIncome: 44000,
                    averageIncome: 50100
                }
            },
            {
                name: "Human computer interaction",
                data: {
                    employment: 200,
                    medianIncome: 66000,
                    averageIncome: 74000
                }
            },
            {
                name: "Sustainability studies",
                data: {
                    employment: 2755,
                    medianIncome: 42800,
                    averageIncome: 52450
                }
            },
            {
                name: "Anthrozoology",
                data: {
                    employment: 20,
                    medianIncome: 0,
                    averageIncome: 36000
                }
            },
            {
                name: "Cultural studies and comparative literature",
                data: {
                    employment: 50,
                    medianIncome: 49600,
                    averageIncome: 50000
                }
            },
            {
                name: "Economics and foreign language/literature",
                data: {
                    employment: 580,
                    medianIncome: 44400,
                    averageIncome: 75600
                }
            },
            {
                name: "Geography and environmental studies",
                data: {
                    employment: 3005,
                    medianIncome: 51200,
                    averageIncome: 60800
                }
            },
            {
                name: "History and political science",
                data: {
                    employment: 6165,
                    medianIncome: 57200,
                    averageIncome: 71300
                }
            },
            {
                name: "Psychology, general",
                data: {
                    employment: 205125,
                    medianIncome: 44000,
                    averageIncome: 53750
                }
            },
            {
                name: "Research and experimental psychology",
                data: {
                    employment: 12740,
                    medianIncome: 44000,
                    averageIncome: 52050
                }
            },
            {
                name: "Clinical, counselling and applied psychology",
                data: {
                    employment: 41485,
                    medianIncome: 54400,
                    averageIncome: 58300
                }
            },
            {
                name: "Psychology, other",
                data: {
                    employment: 1130,
                    medianIncome: 54400,
                    averageIncome: 70200
                }
            },
            {
                name: "General social sciences",
                data: {
                    employment: 46605,
                    medianIncome: 36800,
                    averageIncome: 47720
                }
            },
            {
                name: "Anthropology",
                data: {
                    employment: 23920,
                    medianIncome: 44000,
                    averageIncome: 52750
                }
            },
            {
                name: "Archaeology",
                data: {
                    employment: 5195,
                    medianIncome: 42000,
                    averageIncome: 49240
                }
            },
            {
                name: "Criminology",
                data: {
                    employment: 58780,
                    medianIncome: 53600,
                    averageIncome: 59550
                }
            },
            {
                name: "Demography",
                data: {
                    employment: 675,
                    medianIncome: 61600,
                    averageIncome: 60300
                }
            },
            {
                name: "Economics",
                data: {
                    employment: 156895,
                    medianIncome: 53200,
                    averageIncome: 79300
                }
            },
            {
                name: "Geography and cartography",
                data: {
                    employment: 58725,
                    medianIncome: 60000,
                    averageIncome: 68000
                }
            },
            {
                name: "International relations and national security studies",
                data: {
                    employment: 15440,
                    medianIncome: 51600,
                    averageIncome: 66800
                }
            },
            {
                name: "Political science and government",
                data: {
                    employment: 103900,
                    medianIncome: 55200,
                    averageIncome: 72700
                }
            },
            {
                name: "Sociology",
                data: {
                    employment: 88320,
                    medianIncome: 49600,
                    averageIncome: 58500
                }
            },
            {
                name: "Urban studies/affairs",
                data: {
                    employment: 2340,
                    medianIncome: 56000,
                    averageIncome: 62250
                }
            },
            {
                name: "Sociology and anthropology",
                data: {
                    employment: 2275,
                    medianIncome: 50000,
                    averageIncome: 55750
                }
            },
            {
                name: "Geography and anthropology",
                data: {
                    employment: 200,
                    medianIncome: 44800,
                    averageIncome: 57600
                }
            },
            {
                name: "Social sciences, other",
                data: {
                    employment: 4125,
                    medianIncome: 35600,
                    averageIncome: 44560
                }
            }
        ]
    },
    {
        name: MajorCategory.BUSINESS_AND_ADMINISTRATION,
        data: {
            employment: 2971960,
            medianIncome: 48400,
            averageIncome: 66400
        },
        subSubCategories: [
            {
                name: "Accounting and computer science",
                data: {
                    employment: 3775,
                    medianIncome: 43600,
                    averageIncome: 52150
                }
            },
            {
                name: "Human services, general",
                data: {
                    employment: 40165,
                    medianIncome: 38800,
                    averageIncome: 41040
                }
            },
            {
                name: "Community organization and advocacy",
                data: {
                    employment: 250,
                    medianIncome: 33200,
                    averageIncome: 40000
                }
            },
            {
                name: "Public administration",
                data: {
                    employment: 29785,
                    medianIncome: 68000,
                    averageIncome: 73500
                }
            },
            {
                name: "Public policy analysis",
                data: {
                    employment: 6375,
                    medianIncome: 70000,
                    averageIncome: 76100
                }
            },
            {
                name: "Social work",
                data: {
                    employment: 141755,
                    medianIncome: 49200,
                    averageIncome: 52300
                }
            },
            {
                name: "Public administration and social service professions, other",
                data: {
                    employment: 280,
                    medianIncome: 40800,
                    averageIncome: 50800
                }
            },
            {
                name: "Business/commerce, general",
                data: {
                    employment: 501500,
                    medianIncome: 56000,
                    averageIncome: 86700
                }
            },
            {
                name: "Business administration, management and operations",
                data: {
                    employment: 691790,
                    medianIncome: 53200,
                    averageIncome: 70800
                }
            },
            {
                name: "Accounting and related services",
                data: {
                    employment: 498315,
                    medianIncome: 48000,
                    averageIncome: 63250
                }
            },
            {
                name: "Business operations support and assistant services",
                data: {
                    employment: 236740,
                    medianIncome: 35600,
                    averageIncome: 36600
                }
            },
            {
                name: "Business/corporate communications",
                data: {
                    employment: 2520,
                    medianIncome: 50800,
                    averageIncome: 59950
                }
            },
            {
                name: "Business/managerial economics",
                data: {
                    employment: 18150,
                    medianIncome: 57200,
                    averageIncome: 92500
                }
            },
            {
                name: "Entrepreneurial and small business operations",
                data: {
                    employment: 10655,
                    medianIncome: 34000,
                    averageIncome: 44880
                }
            },
            {
                name: "Finance and financial management services",
                data: {
                    employment: 182580,
                    medianIncome: 55200,
                    averageIncome: 89600
                }
            },
            {
                name: "Hospitality administration/management",
                data: {
                    employment: 109095,
                    medianIncome: 32000,
                    averageIncome: 39600
                }
            },
            {
                name: "Human resources management and services",
                data: {
                    employment: 117895,
                    medianIncome: 54400,
                    averageIncome: 61650
                }
            },
            {
                name: "International business/trade/commerce",
                data: {
                    employment: 26655,
                    medianIncome: 42800,
                    averageIncome: 55950
                }
            },
            {
                name: "Management information systems and services",
                data: {
                    employment: 16230,
                    medianIncome: 69000,
                    averageIncome: 75700
                }
            },
            {
                name: "Management sciences and quantitative methods",
                data: {
                    employment: 14095,
                    medianIncome: 84000,
                    averageIncome: 109700
                }
            },
            {
                name: "Marketing",
                data: {
                    employment: 134750,
                    medianIncome: 48400,
                    averageIncome: 61400
                }
            },
            {
                name: "Real estate",
                data: {
                    employment: 45740,
                    medianIncome: 38400,
                    averageIncome: 55500
                }
            },
            {
                name: "Taxation",
                data: {
                    employment: 4160,
                    medianIncome: 80000,
                    averageIncome: 107400
                }
            },
            {
                name: "Insurance",
                data: {
                    employment: 28775,
                    medianIncome: 54000,
                    averageIncome: 61250
                }
            },
            {
                name: "General sales, merchandising and related marketing operations",
                data: {
                    employment: 24200,
                    medianIncome: 38800,
                    averageIncome: 50080
                }
            },
            {
                name: "Specialized sales, merchandising and marketing operations",
                data: {
                    employment: 75845,
                    medianIncome: 35200,
                    averageIncome: 41160
                }
            },
            {
                name: "Construction management",
                data: {
                    employment: 8300,
                    medianIncome: 66000,
                    averageIncome: 76300
                }
            },
            {
                name: "Telecommunications management",
                data: {
                    employment: 170,
                    medianIncome: 55200,
                    averageIncome: 63200
                }
            },
            {
                name: "Business, management, marketing and related support services, other",
                data: {
                    employment: 1415,
                    medianIncome: 48800,
                    averageIncome: 79600
                }
            }
        ]
    },
    {
        name: MajorCategory.PHYSICAL_AND_LIFE_SCIENCES,
        data: {
            employment: 563660,
            medianIncome: 46400,
            averageIncome: 60950
        },
        subSubCategories: [
            {
                name: "Biology, general",
                data: {
                    employment: 98645,
                    medianIncome: 45200,
                    averageIncome: 55450
                }
            },
            {
                name: "Biochemistry/biophysics and molecular biology",
                data: {
                    employment: 36030,
                    medianIncome: 54400,
                    averageIncome: 67100
                }
            },
            {
                name: "Botany/plant biology",
                data: {
                    employment: 6350,
                    medianIncome: 37600,
                    averageIncome: 49960
                }
            },
            {
                name: "Cell/cellular biology and anatomical sciences",
                data: {
                    employment: 5360,
                    medianIncome: 58000,
                    averageIncome: 68900
                }
            },
            {
                name: "Microbiological sciences and immunology",
                data: {
                    employment: 21075,
                    medianIncome: 53600,
                    averageIncome: 66400
                }
            },
            {
                name: "Zoology/animal biology",
                data: {
                    employment: 9475,
                    medianIncome: 41200,
                    averageIncome: 53600
                }
            },
            {
                name: "Genetics",
                data: {
                    employment: 4945,
                    medianIncome: 68000,
                    averageIncome: 82100
                }
            },
            {
                name: "Physiology, pathology and related sciences",
                data: {
                    employment: 9655,
                    medianIncome: 58400,
                    averageIncome: 78100
                }
            },
            {
                name: "Pharmacology and toxicology",
                data: {
                    employment: 6910,
                    medianIncome: 60400,
                    averageIncome: 79000
                }
            },
            {
                name: "Biomathematics, bioinformatics, and computational biology",
                data: {
                    employment: 2350,
                    medianIncome: 60000,
                    averageIncome: 69400
                }
            },
            {
                name: "Biotechnology",
                data: {
                    employment: 10620,
                    medianIncome: 39600,
                    averageIncome: 47760
                }
            },
            {
                name: "Ecology, evolution, systematics and population biology",
                data: {
                    employment: 17000,
                    medianIncome: 58000,
                    averageIncome: 73600
                }
            },
            {
                name: "Molecular medicine",
                data: {
                    employment: 415,
                    medianIncome: 69000,
                    averageIncome: 72400
                }
            },
            {
                name: "Neurobiology and neurosciences",
                data: {
                    employment: 10110,
                    medianIncome: 42400,
                    averageIncome: 62400
                }
            },
            {
                name: "Biological and biomedical sciences, other",
                data: {
                    employment: 20,
                    medianIncome: 0,
                    averageIncome: 68000
                }
            },
            {
                name: "Biological and physical sciences",
                data: {
                    employment: 122235,
                    medianIncome: 42400,
                    averageIncome: 57450
                }
            },
            {
                name: "Biopsychology",
                data: {
                    employment: 3115,
                    medianIncome: 41600,
                    averageIncome: 49280
                }
            },
            {
                name: "Natural sciences",
                data: {
                    employment: 21310,
                    medianIncome: 11500,
                    averageIncome: 19200
                }
            },
            {
                name: "Nutrition sciences",
                data: {
                    employment: 3080,
                    medianIncome: 51200,
                    averageIncome: 55400
                }
            },
            {
                name: "Human biology",
                data: {
                    employment: 1595,
                    medianIncome: 52400,
                    averageIncome: 69900
                }
            },
            {
                name: "Marine sciences",
                data: {
                    employment: 300,
                    medianIncome: 54000,
                    averageIncome: 55200
                }
            },
            {
                name: "Climate science",
                data: {
                    employment: 420,
                    medianIncome: 57200,
                    averageIncome: 61200
                }
            },
            {
                name: "Earth systems science",
                data: {
                    employment: 30,
                    medianIncome: 0,
                    averageIncome: 85000
                }
            },
            {
                name: "Environmental geosciences",
                data: {
                    employment: 505,
                    medianIncome: 45600,
                    averageIncome: 56800
                }
            },
            {
                name: "Geoarchaeology",
                data: {
                    employment: 0,
                    medianIncome: 0,
                    averageIncome: 0
                }
            },
            {
                name: "Geobiology",
                data: {
                    employment: 205,
                    medianIncome: 44800,
                    averageIncome: 54000
                }
            },
            {
                name: "Mathematics and atmospheric/oceanic science",
                data: {
                    employment: 0,
                    medianIncome: 0,
                    averageIncome: 0
                }
            },
            {
                name: "Physical sciences, general",
                data: {
                    employment: 11710,
                    medianIncome: 52400,
                    averageIncome: 65900
                }
            },
            {
                name: "Astronomy and astrophysics",
                data: {
                    employment: 2080,
                    medianIncome: 66000,
                    averageIncome: 77200
                }
            },
            {
                name: "Atmospheric sciences and meteorology",
                data: {
                    employment: 2035,
                    medianIncome: 73500,
                    averageIncome: 70300
                }
            },
            {
                name: "Chemistry",
                data: {
                    employment: 60130,
                    medianIncome: 50800,
                    averageIncome: 63400
                }
            },
            {
                name: "Geological and Earth sciences/geosciences",
                data: {
                    employment: 34435,
                    medianIncome: 58800,
                    averageIncome: 82600
                }
            },
            {
                name: "Physics",
                data: {
                    employment: 31885,
                    medianIncome: 60000,
                    averageIncome: 72500
                }
            },
            {
                name: "Materials sciences",
                data: {
                    employment: 3240,
                    medianIncome: 47600,
                    averageIncome: 69900
                }
            },
            {
                name: "Physics and astronomy",
                data: {
                    employment: 535,
                    medianIncome: 28200,
                    averageIncome: 44400
                }
            },
            {
                name: "Physical sciences, other",
                data: {
                    employment: 1555,
                    medianIncome: 57600,
                    averageIncome: 65000
                }
            },
            {
                name: "Science technologies/technicians, general",
                data: {
                    employment: 11625,
                    medianIncome: 39200,
                    averageIncome: 44720
                }
            },
            {
                name: "Biology and biotechnology technologies/technicians",
                data: {
                    employment: 2165,
                    medianIncome: 38000,
                    averageIncome: 41160
                }
            },
            {
                name: "Nuclear and industrial radiologic technologies/technicians",
                data: {
                    employment: 510,
                    medianIncome: 65000,
                    averageIncome: 62800
                }
            },
            {
                name: "Physical science technologies/technicians",
                data: {
                    employment: 9485,
                    medianIncome: 52000,
                    averageIncome: 59450
                }
            },
            {
                name: "Science technologies/technicians, other",
                data: {
                    employment: 500,
                    medianIncome: 51600,
                    averageIncome: 56400
                }
            }
        ]
    },
    {
        name: MajorCategory.MATHEMATICS_AND_COMPUTING,
        data: {
            employment: 656470,
            medianIncome: 59200,
            averageIncome: 70300
        },
        subSubCategories: [
            {
                name: "Computer and information sciences and support services, general",
                data: {
                    employment: 138185,
                    medianIncome: 57600,
                    averageIncome: 65600
                }
            },
            {
                name: "Computer programming",
                data: {
                    employment: 49680,
                    medianIncome: 50800,
                    averageIncome: 59350
                }
            },
            {
                name: "Data processing and data processing technology/technician",
                data: {
                    employment: 2690,
                    medianIncome: 45200,
                    averageIncome: 54050
                }
            },
            {
                name: "Information science/studies",
                data: {
                    employment: 4000,
                    medianIncome: 67500,
                    averageIncome: 75600
                }
            },
            {
                name: "Computer systems analysis/analyst",
                data: {
                    employment: 12475,
                    medianIncome: 61200,
                    averageIncome: 64900
                }
            },
            {
                name: "Data entry/microcomputer applications",
                data: {
                    employment: 7155,
                    medianIncome: 35200,
                    averageIncome: 40120
                }
            },
            {
                name: "Computer science",
                data: {
                    employment: 245220,
                    medianIncome: 71500,
                    averageIncome: 81300
                }
            },
            {
                name: "Computer software and media applications",
                data: {
                    employment: 21000,
                    medianIncome: 38800,
                    averageIncome: 47600
                }
            },
            {
                name: "Computer systems networking and telecommunications",
                data: {
                    employment: 975,
                    medianIncome: 63200,
                    averageIncome: 69200
                }
            },
            {
                name: "Computer/information technology administration and management",
                data: {
                    employment: 46150,
                    medianIncome: 48800,
                    averageIncome: 55100
                }
            },
            {
                name: "Computer and information sciences and support services, other",
                data: {
                    employment: 12500,
                    medianIncome: 51200,
                    averageIncome: 59850
                }
            },
            {
                name: "Library science and administration",
                data: {
                    employment: 17755,
                    medianIncome: 56400,
                    averageIncome: 58950
                }
            },
            {
                name: "Library and archives assisting",
                data: {
                    employment: 10430,
                    medianIncome: 38800,
                    averageIncome: 38560
                }
            },
            {
                name: "Library science, other",
                data: {
                    employment: 25,
                    medianIncome: 0,
                    averageIncome: 32000
                }
            },
            {
                name: "Mathematics",
                data: {
                    employment: 51525,
                    medianIncome: 58400,
                    averageIncome: 79300
                }
            },
            {
                name: "Applied mathematics",
                data: {
                    employment: 6660,
                    medianIncome: 65500,
                    averageIncome: 80900
                }
            },
            {
                name: "Statistics",
                data: {
                    employment: 14375,
                    medianIncome: 54000,
                    averageIncome: 68100
                }
            },
            {
                name: "Applied statistics",
                data: {
                    employment: 205,
                    medianIncome: 60400,
                    averageIncome: 72000
                }
            },
            {
                name: "Mathematics and statistics, other",
                data: {
                    employment: 200,
                    medianIncome: 39200,
                    averageIncome: 50800
                }
            },
            {
                name: "Systems science and theory",
                data: {
                    employment: 195,
                    medianIncome: 80000,
                    averageIncome: 96000
                }
            },
            {
                name: "Mathematics and computer science",
                data: {
                    employment: 8255,
                    medianIncome: 76000,
                    averageIncome: 86800
                }
            },
            {
                name: "Computational science",
                data: {
                    employment: 325,
                    medianIncome: 70000,
                    averageIncome: 76000
                }
            },
            {
                name: "Economics and computer science",
                data: {
                    employment: 700,
                    medianIncome: 81000,
                    averageIncome: 94800
                }
            },
            {
                name: "Linguistics and computer science",
                data: {
                    employment: 135,
                    medianIncome: 83000,
                    averageIncome: 82000
                }
            },
            {
                name: "Mathematical economics",
                data: {
                    employment: 1945,
                    medianIncome: 54000,
                    averageIncome: 70800
                }
            },
            {
                name: "Data science",
                data: {
                    employment: 1305,
                    medianIncome: 60400,
                    averageIncome: 61850
                }
            },
            {
                name: "Data analytics",
                data: {
                    employment: 2405,
                    medianIncome: 72000,
                    averageIncome: 76500
                }
            }
        ]
    },
    {
        name: MajorCategory.ARCHITECTURE_AND_ENGINEERING,
        data: {
            employment: 2770415,
            medianIncome: 56400,
            averageIncome: 65800
        },
        subSubCategories: [
            {
                name: "Architecture",
                data: {
                    employment: 43525,
                    medianIncome: 50400,
                    averageIncome: 62750
                }
            },
            {
                name: "City/urban, community and regional planning",
                data: {
                    employment: 22505,
                    medianIncome: 64500,
                    averageIncome: 73600
                }
            },
            {
                name: "Environmental design/architecture",
                data: {
                    employment: 3385,
                    medianIncome: 36000,
                    averageIncome: 49200
                }
            },
            {
                name: "Interior architecture",
                data: {
                    employment: 865,
                    medianIncome: 30000,
                    averageIncome: 40300
                }
            },
            {
                name: "Landscape architecture (BS, BSc, BSLA, BLA, MSLA, MLA, PhD)",
                data: {
                    employment: 4775,
                    medianIncome: 55200,
                    averageIncome: 62350
                }
            },
            {
                name: "Architectural history, criticism, and conservation",
                data: {
                    employment: 520,
                    medianIncome: 35600,
                    averageIncome: 53400
                }
            },
            {
                name: "Architectural sciences and technology",
                data: {
                    employment: 32015,
                    medianIncome: 52800,
                    averageIncome: 58950
                }
            },
            {
                name: "Real estate development",
                data: {
                    employment: 150,
                    medianIncome: 65000,
                    averageIncome: 128000
                }
            },
            {
                name: "Architecture and related services, other",
                data: {
                    employment: 1885,
                    medianIncome: 44000,
                    averageIncome: 52750
                }
            },
            {
                name: "General engineering",
                data: {
                    employment: 161820,
                    medianIncome: 80000,
                    averageIncome: 99200
                }
            },
            {
                name: "Aerospace, aeronautical and astronautical/space engineering",
                data: {
                    employment: 10835,
                    medianIncome: 66500,
                    averageIncome: 76700
                }
            },
            {
                name: "Agricultural engineering",
                data: {
                    employment: 5155,
                    medianIncome: 40800,
                    averageIncome: 49560
                }
            },
            {
                name: "Architectural engineering",
                data: {
                    employment: 1820,
                    medianIncome: 36400,
                    averageIncome: 45760
                }
            },
            {
                name: "Biomedical/medical engineering",
                data: {
                    employment: 6335,
                    medianIncome: 55600,
                    averageIncome: 63900
                }
            },
            {
                name: "Ceramic sciences and engineering",
                data: {
                    employment: 70,
                    medianIncome: 47200,
                    averageIncome: 70000
                }
            },
            {
                name: "Chemical engineering",
                data: {
                    employment: 36510,
                    medianIncome: 67000,
                    averageIncome: 86400
                }
            },
            {
                name: "Civil engineering",
                data: {
                    employment: 88635,
                    medianIncome: 61600,
                    averageIncome: 73200
                }
            },
            {
                name: "Computer engineering",
                data: {
                    employment: 61835,
                    medianIncome: 77000,
                    averageIncome: 87900
                }
            },
            {
                name: "Electrical, electronics and communications engineering",
                data: {
                    employment: 126430,
                    medianIncome: 69500,
                    averageIncome: 80600
                }
            },
            {
                name: "Engineering mechanics",
                data: {
                    employment: 345,
                    medianIncome: 54800,
                    averageIncome: 70800
                }
            },
            {
                name: "Engineering physics/applied physics",
                data: {
                    employment: 4435,
                    medianIncome: 76000,
                    averageIncome: 85400
                }
            },
            {
                name: "Engineering science",
                data: {
                    employment: 1490,
                    medianIncome: 89000,
                    averageIncome: 111400
                }
            },
            {
                name: "Environmental/environmental health engineering",
                data: {
                    employment: 6860,
                    medianIncome: 61600,
                    averageIncome: 69900
                }
            },
            {
                name: "Materials engineering",
                data: {
                    employment: 4635,
                    medianIncome: 63600,
                    averageIncome: 75200
                }
            },
            {
                name: "Mechanical engineering",
                data: {
                    employment: 116710,
                    medianIncome: 62800,
                    averageIncome: 74700
                }
            },
            {
                name: "Metallurgical engineering",
                data: {
                    employment: 2085,
                    medianIncome: 58400,
                    averageIncome: 87800
                }
            },
            {
                name: "Mining and mineral engineering",
                data: {
                    employment: 4985,
                    medianIncome: 84000,
                    averageIncome: 130800
                }
            },
            {
                name: "Naval architecture and marine engineering",
                data: {
                    employment: 3855,
                    medianIncome: 56000,
                    averageIncome: 72200
                }
            },
            {
                name: "Nuclear engineering",
                data: {
                    employment: 1270,
                    medianIncome: 90000,
                    averageIncome: 91200
                }
            },
            {
                name: "Ocean engineering",
                data: {
                    employment: 70,
                    medianIncome: 80000,
                    averageIncome: 74000
                }
            },
            {
                name: "Petroleum engineering",
                data: {
                    employment: 4770,
                    medianIncome: 50800,
                    averageIncome: 84000
                }
            },
            {
                name: "Systems engineering",
                data: {
                    employment: 2995,
                    medianIncome: 78000,
                    averageIncome: 87900
                }
            },
            {
                name: "Textile sciences and engineering",
                data: {
                    employment: 940,
                    medianIncome: 33600,
                    averageIncome: 40500
                }
            },
            {
                name: "Polymer/plastics engineering",
                data: {
                    employment: 380,
                    medianIncome: 46000,
                    averageIncome: 48000
                }
            },
            {
                name: "Construction engineering",
                data: {
                    employment: 9980,
                    medianIncome: 53200,
                    averageIncome: 61150
                }
            },
            {
                name: "Forest engineering",
                data: {
                    employment: 1955,
                    medianIncome: 60800,
                    averageIncome: 67300
                }
            },
            {
                name: "Industrial engineering",
                data: {
                    employment: 19490,
                    medianIncome: 58000,
                    averageIncome: 71500
                }
            },
            {
                name: "Manufacturing engineering",
                data: {
                    employment: 3390,
                    medianIncome: 68000,
                    averageIncome: 71300
                }
            },
            {
                name: "Operations research",
                data: {
                    employment: 1020,
                    medianIncome: 72000,
                    averageIncome: 81400
                }
            },
            {
                name: "Surveying engineering",
                data: {
                    employment: 3560,
                    medianIncome: 66500,
                    averageIncome: 72500
                }
            },
            {
                name: "Geological/geophysical engineering",
                data: {
                    employment: 2970,
                    medianIncome: 72000,
                    averageIncome: 87900
                }
            },
            {
                name: "Paper science and engineering",
                data: {
                    employment: 110,
                    medianIncome: 105000,
                    averageIncome: 110000
                }
            },
            {
                name: "Electromechanical engineering",
                data: {
                    employment: 1955,
                    medianIncome: 54400,
                    averageIncome: 62750
                }
            },
            {
                name: "Mechatronics, robotics, and automation engineering",
                data: {
                    employment: 5835,
                    medianIncome: 65000,
                    averageIncome: 70400
                }
            },
            {
                name: "Biochemical engineering",
                data: {
                    employment: 695,
                    medianIncome: 70000,
                    averageIncome: 81600
                }
            },
            {
                name: "Engineering chemistry",
                data: {
                    employment: 1100,
                    medianIncome: 47600,
                    averageIncome: 59400
                }
            },
            {
                name: "Biological/biosystems engineering",
                data: {
                    employment: 1090,
                    medianIncome: 54000,
                    averageIncome: 84000
                }
            },
            {
                name: "Electrical and computer engineering",
                data: {
                    employment: 7340,
                    medianIncome: 78500,
                    averageIncome: 99200
                }
            },
            {
                name: "Energy systems engineering",
                data: {
                    employment: 4895,
                    medianIncome: 59600,
                    averageIncome: 71100
                }
            },
            {
                name: "Engineering, other",
                data: {
                    employment: 16650,
                    medianIncome: 47600,
                    averageIncome: 58700
                }
            },
            {
                name: "General engineering technologies/technicians",
                data: {
                    employment: 31655,
                    medianIncome: 55600,
                    averageIncome: 68400
                }
            },
            {
                name: "Architectural engineering technology/technician",
                data: {
                    employment: 1535,
                    medianIncome: 62400,
                    averageIncome: 70700
                }
            },
            {
                name: "Civil engineering technology/technician",
                data: {
                    employment: 42585,
                    medianIncome: 61200,
                    averageIncome: 68100
                }
            },
            {
                name: "Electrical/electronic engineering technologies/technicians",
                data: {
                    employment: 145910,
                    medianIncome: 57200,
                    averageIncome: 62700
                }
            },
            {
                name: "Electromechanical technologies/technicians",
                data: {
                    employment: 44545,
                    medianIncome: 64000,
                    averageIncome: 72100
                }
            },
            {
                name: "Environmental control technologies/technicians",
                data: {
                    employment: 19090,
                    medianIncome: 56000,
                    averageIncome: 58500
                }
            },
            {
                name: "Industrial production technologies/technicians",
                data: {
                    employment: 22705,
                    medianIncome: 58800,
                    averageIncome: 68200
                }
            },
            {
                name: "Quality control and safety technologies/technicians",
                data: {
                    employment: 23980,
                    medianIncome: 60800,
                    averageIncome: 66800
                }
            },
            {
                name: "Mechanical engineering related technologies/technicians",
                data: {
                    employment: 57535,
                    medianIncome: 59600,
                    averageIncome: 65000
                }
            },
            {
                name: "Mining and petroleum technologies/technicians",
                data: {
                    employment: 28300,
                    medianIncome: 59200,
                    averageIncome: 71500
                }
            },
            {
                name: "Construction engineering technology/technician",
                data: {
                    employment: 6570,
                    medianIncome: 62000,
                    averageIncome: 71100
                }
            },
            {
                name: "Engineering-related technologies/technicians",
                data: {
                    employment: 9105,
                    medianIncome: 52000,
                    averageIncome: 58600
                }
            },
            {
                name: "Computer engineering technologies/technicians",
                data: {
                    employment: 49535,
                    medianIncome: 54800,
                    averageIncome: 61650
                }
            },
            {
                name: "Drafting/design engineering technologies/technicians",
                data: {
                    employment: 32175,
                    medianIncome: 44400,
                    averageIncome: 50440
                }
            },
            {
                name: "Nuclear engineering technology/technician",
                data: {
                    employment: 35,
                    medianIncome: 0,
                    averageIncome: 44000
                }
            },
            {
                name: "Engineering-related fields",
                data: {
                    employment: 4590,
                    medianIncome: 73500,
                    averageIncome: 83400
                }
            },
            {
                name: "Nanotechnology",
                data: {
                    employment: 810,
                    medianIncome: 50400,
                    averageIncome: 59200
                }
            },
            {
                name: "Energy systems technologies/technicians",
                data: {
                    employment: 43525,
                    medianIncome: 75000,
                    averageIncome: 88200
                }
            },
            {
                name: "Engineering/engineering-related technologies/technicians, other",
                data: {
                    employment: 8855,
                    medianIncome: 60400,
                    averageIncome: 66900
                }
            },
            {
                name: "Historic preservation and conservation",
                data: {
                    employment: 485,
                    medianIncome: 40000,
                    averageIncome: 44200
                }
            },
            {
                name: "Construction trades, general",
                data: {
                    employment: 36660,
                    medianIncome: 44400,
                    averageIncome: 50400
                }
            },
            {
                name: "Masonry/mason",
                data: {
                    employment: 16285,
                    medianIncome: 42400,
                    averageIncome: 46120
                }
            },
            {
                name: "Carpentry/carpenter",
                data: {
                    employment: 127505,
                    medianIncome: 46000,
                    averageIncome: 50520
                }
            },
            {
                name: "Electrical and power transmission installers",
                data: {
                    employment: 185665,
                    medianIncome: 58000,
                    averageIncome: 63050
                }
            },
            {
                name: "Building/construction finishing, management and inspection",
                data: {
                    employment: 75915,
                    medianIncome: 45600,
                    averageIncome: 49480
                }
            },
            {
                name: "Plumbing and related water supply services",
                data: {
                    employment: 105435,
                    medianIncome: 55600,
                    averageIncome: 59300
                }
            },
            {
                name: "Construction trades, other",
                data: {
                    employment: 5120,
                    medianIncome: 94000,
                    averageIncome: 90400
                }
            },
            {
                name: "Mechanics and repairers, general",
                data: {
                    employment: 74740,
                    medianIncome: 48400,
                    averageIncome: 52950
                }
            },
            {
                name: "Electrical/electronics maintenance and repair technologies/technicians",
                data: {
                    employment: 34025,
                    medianIncome: 49200,
                    averageIncome: 52250
                }
            },
            {
                name: "Heating, air conditioning, ventilation and refrigeration maintenance technology/technician",
                data: {
                    employment: 41165,
                    medianIncome: 55200,
                    averageIncome: 59750
                }
            },
            {
                name: "Heavy/industrial equipment maintenance technologies/technicians",
                data: {
                    employment: 110290,
                    medianIncome: 71000,
                    averageIncome: 74400
                }
            },
            {
                name: "Precision systems maintenance and repair technologies/technicians",
                data: {
                    employment: 13705,
                    medianIncome: 52400,
                    averageIncome: 57700
                }
            },
            {
                name: "Vehicle maintenance and repair technologies/technicians",
                data: {
                    employment: 237155,
                    medianIncome: 50400,
                    averageIncome: 53950
                }
            },
            {
                name: "Energy systems maintenance and repair technologies/technicians",
                data: {
                    employment: 1105,
                    medianIncome: 38800,
                    averageIncome: 52400
                }
            },
            {
                name: "Mechanic and repair technologies/technicians, other",
                data: {
                    employment: 510,
                    medianIncome: 27800,
                    averageIncome: 38200
                }
            },
            {
                name: "Precision production trades, general",
                data: {
                    employment: 500,
                    medianIncome: 44800,
                    averageIncome: 46200
                }
            },
            {
                name: "Leatherworking and upholstery",
                data: {
                    employment: 1860,
                    medianIncome: 25000,
                    averageIncome: 30880
                }
            },
            {
                name: "Precision metal working",
                data: {
                    employment: 237475,
                    medianIncome: 50400,
                    averageIncome: 54550
                }
            },
            {
                name: "Woodworking",
                data: {
                    employment: 34910,
                    medianIncome: 39600,
                    averageIncome: 43240
                }
            },
            {
                name: "Boilermaking/boilermaker",
                data: {
                    employment: 5845,
                    medianIncome: 54000,
                    averageIncome: 62450
                }
            },
            {
                name: "Precision production, other",
                data: {
                    employment: 4090,
                    medianIncome: 42800,
                    averageIncome: 48600
                }
            }
        ]
    },
    {
        name: MajorCategory.AGRICULTURE_AND_RESOURCES,
        data: {
            employment: 333330,
            medianIncome: 42400,
            averageIncome: 51600
        },
        subSubCategories: [
            {
                name: "Agriculture, general",
                data: {
                    employment: 51105,
                    medianIncome: 36000,
                    averageIncome: 46480
                }
            },
            {
                name: "Agricultural business and management",
                data: {
                    employment: 11680,
                    medianIncome: 42800,
                    averageIncome: 55000
                }
            },
            {
                name: "Agricultural mechanization",
                data: {
                    employment: 5770,
                    medianIncome: 51200,
                    averageIncome: 55600
                }
            },
            {
                name: "Agricultural production operations",
                data: {
                    employment: 14100,
                    medianIncome: 33600,
                    averageIncome: 39600
                }
            },
            {
                name: "Agricultural and food products processing",
                data: {
                    employment: 2070,
                    medianIncome: 33200,
                    averageIncome: 35680
                }
            },
            {
                name: "Agricultural and domestic animal services",
                data: {
                    employment: 9175,
                    medianIncome: 19800,
                    averageIncome: 26520
                }
            },
            {
                name: "Applied horticulture/horticultural business services",
                data: {
                    employment: 37690,
                    medianIncome: 36800,
                    averageIncome: 43880
                }
            },
            {
                name: "International agriculture",
                data: {
                    employment: 50,
                    medianIncome: 37600,
                    averageIncome: 44000
                }
            },
            {
                name: "Agricultural public services",
                data: {
                    employment: 190,
                    medianIncome: 52000,
                    averageIncome: 53600
                }
            },
            {
                name: "Animal sciences",
                data: {
                    employment: 10155,
                    medianIncome: 39200,
                    averageIncome: 46600
                }
            },
            {
                name: "Food science and technology",
                data: {
                    employment: 15835,
                    medianIncome: 46400,
                    averageIncome: 53200
                }
            },
            {
                name: "Plant sciences",
                data: {
                    employment: 10770,
                    medianIncome: 49200,
                    averageIncome: 55350
                }
            },
            {
                name: "Soil sciences",
                data: {
                    employment: 1890,
                    medianIncome: 54800,
                    averageIncome: 65000
                }
            },
            {
                name: "Agriculture/veterinary preparatory programs",
                data: {
                    employment: 85,
                    medianIncome: 10500,
                    averageIncome: 22400
                }
            },
            {
                name: "Veterinary medicine (DVM)",
                data: {
                    employment: 13340,
                    medianIncome: 68000,
                    averageIncome: 73500
                }
            },
            {
                name: "Veterinary biomedical and clinical sciences (Cert., MS, MSc, PhD)",
                data: {
                    employment: 2255,
                    medianIncome: 69500,
                    averageIncome: 84900
                }
            },
            {
                name: "Veterinary administrative services",
                data: {
                    employment: 1255,
                    medianIncome: 28600,
                    averageIncome: 29900
                }
            },
            {
                name: "Veterinary/animal health technologies/technicians",
                data: {
                    employment: 23105,
                    medianIncome: 33200,
                    averageIncome: 35520
                }
            },
            {
                name: "Agricultural and veterinary sciences/services/operations and related fields, other",
                data: {
                    employment: 460,
                    medianIncome: 44800,
                    averageIncome: 48600
                }
            },
            {
                name: "Natural resources conservation and research",
                data: {
                    employment: 50980,
                    medianIncome: 53600,
                    averageIncome: 61200
                }
            },
            {
                name: "Environmental/natural resources management and policy",
                data: {
                    employment: 19885,
                    medianIncome: 51200,
                    averageIncome: 58800
                }
            },
            {
                name: "Fishing and fisheries sciences and management",
                data: {
                    employment: 1430,
                    medianIncome: 45200,
                    averageIncome: 53350
                }
            },
            {
                name: "Forestry",
                data: {
                    employment: 44320,
                    medianIncome: 52000,
                    averageIncome: 58200
                }
            },
            {
                name: "Wildlife and wildlands science and management",
                data: {
                    employment: 5280,
                    medianIncome: 41600,
                    averageIncome: 47520
                }
            },
            {
                name: "Natural resources and conservation, other",
                data: {
                    employment: 470,
                    medianIncome: 51600,
                    averageIncome: 55400
                }
            }
        ]
    },
    {
        name: MajorCategory.HEALTH,
        data: {
            employment: 1854055,
            medianIncome: 46000,
            averageIncome: 56000
        },
        subSubCategories: [
            {
                name: "Design for human health",
                data: {
                    employment: 30,
                    medianIncome: 0,
                    averageIncome: 56000
                }
            },
            {
                name: "Parks, recreation, and leisure studies",
                data: {
                    employment: 24915,
                    medianIncome: 42800,
                    averageIncome: 48320
                }
            },
            {
                name: "Parks, recreation, and leisure facilities management",
                data: {
                    employment: 3525,
                    medianIncome: 55200,
                    averageIncome: 59150
                }
            },
            {
                name: "Sports, kinesiology, and physical education/physical fitness",
                data: {
                    employment: 119110,
                    medianIncome: 38400,
                    averageIncome: 49880
                }
            },
            {
                name: "Outdoor education",
                data: {
                    employment: 3200,
                    medianIncome: 38400,
                    averageIncome: 49160
                }
            },
            {
                name: "Parks, recreation, leisure, fitness, and kinesiology, other",
                data: {
                    employment: 305,
                    medianIncome: 14700,
                    averageIncome: 24000
                }
            },
            {
                name: "General health services/allied health/health sciences",
                data: {
                    employment: 73230,
                    medianIncome: 36000,
                    averageIncome: 44360
                }
            },
            {
                name: "Chiropractic (DC)",
                data: {
                    employment: 7965,
                    medianIncome: 45600,
                    averageIncome: 57100
                }
            },
            {
                name: "Communication disorders sciences and services",
                data: {
                    employment: 15760,
                    medianIncome: 64500,
                    averageIncome: 61200
                }
            },
            {
                name: "Dentistry (DDS, DMD)",
                data: {
                    employment: 27015,
                    medianIncome: 51600,
                    averageIncome: 71600
                }
            },
            {
                name: "Advanced/graduate dentistry and oral sciences (Cert., MS, MSc, PhD)",
                data: {
                    employment: 4040,
                    medianIncome: 54000,
                    averageIncome: 87000
                }
            },
            {
                name: "Dental support services and allied professions",
                data: {
                    employment: 93590,
                    medianIncome: 35200,
                    averageIncome: 38200
                }
            },
            {
                name: "Health and medical administrative services",
                data: {
                    employment: 101880,
                    medianIncome: 37200,
                    averageIncome: 40440
                }
            },
            {
                name: "Allied health and medical assisting services",
                data: {
                    employment: 53705,
                    medianIncome: 38000,
                    averageIncome: 39640
                }
            },
            {
                name: "Allied health diagnostic, intervention and treatment professions",
                data: {
                    employment: 79410,
                    medianIncome: 65500,
                    averageIncome: 64700
                }
            },
            {
                name: "Clinical/medical laboratory science/research and allied professions",
                data: {
                    employment: 40495,
                    medianIncome: 49200,
                    averageIncome: 50360
                }
            },
            {
                name: "Health/medical preparatory programs",
                data: {
                    employment: 12855,
                    medianIncome: 18400,
                    averageIncome: 31240
                }
            },
            {
                name: "Medicine",
                data: {
                    employment: 63195,
                    medianIncome: 72000,
                    averageIncome: 105200
                }
            },
            {
                name: "Medical clinical sciences/graduate medical studies",
                data: {
                    employment: 20665,
                    medianIncome: 73000,
                    averageIncome: 110800
                }
            },
            {
                name: "Mental and social health services and allied professions",
                data: {
                    employment: 26945,
                    medianIncome: 38400,
                    averageIncome: 41520
                }
            },
            {
                name: "Optometry (OD)",
                data: {
                    employment: 6515,
                    medianIncome: 71500,
                    averageIncome: 79400
                }
            },
            {
                name: "Ophthalmic and optometric support services and allied professions",
                data: {
                    employment: 11015,
                    medianIncome: 41600,
                    averageIncome: 44800
                }
            },
            {
                name: "Pharmacy, pharmaceutical sciences and administration",
                data: {
                    employment: 58060,
                    medianIncome: 74000,
                    averageIncome: 77300
                }
            },
            {
                name: "Public health",
                data: {
                    employment: 25480,
                    medianIncome: 61600,
                    averageIncome: 71700
                }
            },
            {
                name: "Rehabilitation and therapeutic professions",
                data: {
                    employment: 76710,
                    medianIncome: 52000,
                    averageIncome: 53200
                }
            },
            {
                name: "Health aides/attendants/orderlies",
                data: {
                    employment: 208160,
                    medianIncome: 34800,
                    averageIncome: 35000
                }
            },
            {
                name: "Medical illustration and informatics",
                data: {
                    employment: 1505,
                    medianIncome: 70500,
                    averageIncome: 77200
                }
            },
            {
                name: "Dietetics and clinical nutrition services",
                data: {
                    employment: 14445,
                    medianIncome: 38800,
                    averageIncome: 42400
                }
            },
            {
                name: "Health professions education, ethics, and humanities",
                data: {
                    employment: 2570,
                    medianIncome: 78000,
                    averageIncome: 91900
                }
            },
            {
                name: "Alternative and complementary medicine and medical systems",
                data: {
                    employment: 8600,
                    medianIncome: 19800,
                    averageIncome: 30000
                }
            },
            {
                name: "Alternative and complementary medical support services",
                data: {
                    employment: 8135,
                    medianIncome: 36000,
                    averageIncome: 42600
                }
            },
            {
                name: "Somatic bodywork and related therapeutic services",
                data: {
                    employment: 39790,
                    medianIncome: 21600,
                    averageIncome: 27720
                }
            },
            {
                name: "Movement and mind-body therapies",
                data: {
                    employment: 1795,
                    medianIncome: 12500,
                    averageIncome: 24300
                }
            },
            {
                name: "Energy-based and biologically-based therapies",
                data: {
                    employment: 975,
                    medianIncome: 15900,
                    averageIncome: 24920
                }
            },
            {
                name: "Registered nursing, nursing administration, nursing research and clinical nursing",
                data: {
                    employment: 465995,
                    medianIncome: 62800,
                    averageIncome: 62300
                }
            },
            {
                name: "Practical nursing, vocational nursing and nursing assistants",
                data: {
                    employment: 98930,
                    medianIncome: 43200,
                    averageIncome: 42640
                }
            },
            {
                name: "Health professions and related programs, other",
                data: {
                    employment: 805,
                    medianIncome: 39600,
                    averageIncome: 44000
                }
            },
            {
                name: "Dental residency/fellowship programs",
                data: {
                    employment: 860,
                    medianIncome: 62400,
                    averageIncome: 106000
                }
            },
            {
                name: "Veterinary residency/fellowship programs",
                data: {
                    employment: 575,
                    medianIncome: 86000,
                    averageIncome: 87200
                }
            },
            {
                name: "Nurse practitioner residency/fellowship programs",
                data: {
                    employment: 2985,
                    medianIncome: 103000,
                    averageIncome: 93400
                }
            },
            {
                name: "Pharmacy residency/fellowship programs",
                data: {
                    employment: 50,
                    medianIncome: 111000,
                    averageIncome: 96000
                }
            },
            {
                name: "Physician assistant residency/fellowship programs",
                data: {
                    employment: 0,
                    medianIncome: 0,
                    averageIncome: 0
                }
            },
            {
                name: "Health professions residency/fellowship programs, other",
                data: {
                    employment: 0,
                    medianIncome: 0,
                    averageIncome: 0
                }
            },
            {
                name: "Combined medical residency/fellowship programs",
                data: {
                    employment: 770,
                    medianIncome: 126000,
                    averageIncome: 147600
                }
            },
            {
                name: "Multiple-pathway medical fellowship programs",
                data: {
                    employment: 560,
                    medianIncome: 115000,
                    averageIncome: 147000
                }
            },
            {
                name: "Allergy and immunology residency/fellowship programs",
                data: {
                    employment: 145,
                    medianIncome: 90000,
                    averageIncome: 132000
                }
            },
            {
                name: "Anesthesiology residency/fellowship programs",
                data: {
                    employment: 2470,
                    medianIncome: 125000,
                    averageIncome: 155800
                }
            },
            {
                name: "Dermatology residency/fellowship programs",
                data: {
                    employment: 565,
                    medianIncome: 90000,
                    averageIncome: 144500
                }
            },
            {
                name: "Emergency medicine residency/fellowship programs",
                data: {
                    employment: 1665,
                    medianIncome: 148000,
                    averageIncome: 160800
                }
            },
            {
                name: "Family medicine residency/fellowship programs",
                data: {
                    employment: 15100,
                    medianIncome: 115000,
                    averageIncome: 127000
                }
            },
            {
                name: "Internal medicine residency/fellowship programs",
                data: {
                    employment: 6060,
                    medianIncome: 112000,
                    averageIncome: 150000
                }
            },
            {
                name: "Medical genetics and genomics residency/fellowship programs",
                data: {
                    employment: 40,
                    medianIncome: 123000,
                    averageIncome: 140000
                }
            },
            {
                name: "Neurological surgery residency/fellowship programs",
                data: {
                    employment: 205,
                    medianIncome: 88000,
                    averageIncome: 156000
                }
            },
            {
                name: "Neurology residency/fellowship programs",
                data: {
                    employment: 890,
                    medianIncome: 88000,
                    averageIncome: 130400
                }
            },
            {
                name: "Nuclear medicine residency/fellowship programs",
                data: {
                    employment: 90,
                    medianIncome: 89000,
                    averageIncome: 154000
                }
            },
            {
                name: "Obstetrics and gynecology residency/fellowship programs",
                data: {
                    employment: 2060,
                    medianIncome: 90000,
                    averageIncome: 132800
                }
            },
            {
                name: "Ophthalmology residency/fellowship programs",
                data: {
                    employment: 1160,
                    medianIncome: 96000,
                    averageIncome: 162000
                }
            },
            {
                name: "Orthopedic surgery residency/fellowship programs",
                data: {
                    employment: 1080,
                    medianIncome: 120000,
                    averageIncome: 148400
                }
            },
            {
                name: "Osteopathic medicine residency/fellowship programs",
                data: {
                    employment: 0,
                    medianIncome: 0,
                    averageIncome: 0
                }
            },
            {
                name: "Otolaryngology residency/fellowship programs",
                data: {
                    employment: 480,
                    medianIncome: 79500,
                    averageIncome: 113600
                }
            },
            {
                name: "Pathology residency/fellowship programs",
                data: {
                    employment: 1250,
                    medianIncome: 89000,
                    averageIncome: 158400
                }
            },
            {
                name: "Pediatrics residency/fellowship programs",
                data: {
                    employment: 2935,
                    medianIncome: 81000,
                    averageIncome: 113000
                }
            },
            {
                name: "Physical medicine and rehabilitation residency/fellowship programs",
                data: {
                    employment: 655,
                    medianIncome: 70000,
                    averageIncome: 104400
                }
            },
            {
                name: "Plastic surgery residency/fellowship programs",
                data: {
                    employment: 320,
                    medianIncome: 133000,
                    averageIncome: 191000
                }
            },
            {
                name: "Podiatric medicine residency/fellowship programs",
                data: {
                    employment: 15,
                    medianIncome: 0,
                    averageIncome: 280000
                }
            },
            {
                name: "Preventive medicine residency/fellowship programs",
                data: {
                    employment: 345,
                    medianIncome: 32000,
                    averageIncome: 68800
                }
            },
            {
                name: "Psychiatry residency/fellowship programs",
                data: {
                    employment: 3515,
                    medianIncome: 121000,
                    averageIncome: 151200
                }
            },
            {
                name: "Radiation oncology residency/fellowship programs",
                data: {
                    employment: 245,
                    medianIncome: 156000,
                    averageIncome: 198000
                }
            },
            {
                name: "Radiology residency/fellowship programs",
                data: {
                    employment: 1910,
                    medianIncome: 154000,
                    averageIncome: 202400
                }
            },
            {
                name: "Surgery residency/fellowship programs",
                data: {
                    employment: 2935,
                    medianIncome: 81000,
                    averageIncome: 132600
                }
            },
            {
                name: "Urology residency/fellowship programs",
                data: {
                    employment: 460,
                    medianIncome: 108000,
                    averageIncome: 133000
                }
            },
            {
                name: "Medical residency/fellowship programs, other",
                data: {
                    employment: 310,
                    medianIncome: 148000,
                    averageIncome: 152000
                }
            }
        ]
    },
    {
        name: MajorCategory.PERSONAL_AND_PROTECTIVE_SERVICES,
        data: {
            employment: 786275,
            medianIncome: 34400,
            averageIncome: 44360
        },
        subSubCategories: [
            {
                name: "Funeral service and mortuary science",
                data: {
                    employment: 4880,
                    medianIncome: 55600,
                    averageIncome: 57350
                }
            },
            {
                name: "Cosmetology and related personal grooming services",
                data: {
                    employment: 231235,
                    medianIncome: 17400,
                    averageIncome: 24000
                }
            },
            {
                name: "Culinary arts and related services",
                data: {
                    employment: 164250,
                    medianIncome: 30400,
                    averageIncome: 35400
                }
            },
            {
                name: "Casino operations and services",
                data: {
                    employment: 280,
                    medianIncome: 16000,
                    averageIncome: 27000
                }
            },
            {
                name: "Culinary, entertainment, and personal services, other",
                data: {
                    employment: 0,
                    medianIncome: 0,
                    averageIncome: 0
                }
            },
            {
                name: "Military science, leadership and operational artCAN",
                data: {
                    employment: 3105,
                    medianIncome: 96000,
                    averageIncome: 92000
                }
            },
            {
                name: "Military technologies and applied sciencesCAN",
                data: {
                    employment: 4185,
                    medianIncome: 51200,
                    averageIncome: 54350
                }
            },
            {
                name: "Criminal justice and corrections",
                data: {
                    employment: 155665,
                    medianIncome: 54000,
                    averageIncome: 60450
                }
            },
            {
                name: "Fire protection",
                data: {
                    employment: 32990,
                    medianIncome: 69500,
                    averageIncome: 71800
                }
            },
            {
                name: "Security and protective services, specialized programs",
                data: {
                    employment: 6065,
                    medianIncome: 58800,
                    averageIncome: 63850
                }
            },
            {
                name: "Security science and technology",
                data: {
                    employment: 3525,
                    medianIncome: 46800,
                    averageIncome: 57350
                }
            },
            {
                name: "Security and protective services, other",
                data: {
                    employment: 1485,
                    medianIncome: 42000,
                    averageIncome: 48160
                }
            },
            {
                name: "Air transportation",
                data: {
                    employment: 35705,
                    medianIncome: 54400,
                    averageIncome: 67600
                }
            },
            {
                name: "Ground transportation",
                data: {
                    employment: 120665,
                    medianIncome: 49200,
                    averageIncome: 53050
                }
            },
            {
                name: "Marine transportation",
                data: {
                    employment: 20260,
                    medianIncome: 51200,
                    averageIncome: 66800
                }
            },
            {
                name: "Transportation and materials moving, other",
                data: {
                    employment: 1980,
                    medianIncome: 43600,
                    averageIncome: 51700
                }
            }
        ]
    },
    {
        name: MajorCategory.OTHER,
        data: {
            employment: 4125,
            medianIncome: 42400,
            averageIncome: 50080
        },
        subSubCategories: [
            {
                name: "Inclusive postsecondary education",
                data: {
                    employment: 435,
                    medianIncome: 4880,
                    averageIncome: 9720
                }
            },
            {
                name: "Multidisciplinary/interdisciplinary studies, other",
                data: {
                    employment: 3695,
                    medianIncome: 47200,
                    averageIncome: 54800
                }
            }
        ]
    }
]

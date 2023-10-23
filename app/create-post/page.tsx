'use client'

import React from 'react'
import { Editor } from "novel";
import PostPreview from '@/components/CreatePost/PostPreview';

const jsonData = {
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": {
        "level": 1
      },
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            },
            {
              "type": "textStyle",
              "attrs": {
                "color": "#9333EA"
              }
            }
          ],
          "text": "Accelerate Your Career 👩🏻‍💻 by Contributing to these 9 Repositories 🔥Boss"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Hello Dev Community,"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "I'm thrilled to present a list of nine open-source repositories spanning various software development domains."
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "From Artificial Intelligence to Blockchain, Databases, and Backend Development. This list also touches upon API Management, Web Development, and the crucial areas of Authentication and Security."
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "Here's how you can navigate this roadmap"
        },
        {
          "type": "text",
          "text": ":"
        }
      ]
    },
    {
      "type": "bulletList",
      "attrs": {
        "tight": true
      },
      "content": [
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "Dive into "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "9 Open Source Repositories"
                },
                {
                  "type": "text",
                  "text": " encapsulating the essence of varied software development fields."
                }
              ]
            },
            {
              "type": "bulletList",
              "attrs": {
                "tight": true
              },
              "content": [
                {
                  "type": "listItem",
                  "content": [
                    {
                      "type": "paragraph",
                      "content": [
                        {
                          "type": "text",
                          "text": "Begin exploring the GitHub Profiles of the listed repositories."
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "listItem",
                  "content": [
                    {
                      "type": "paragraph",
                      "content": [
                        {
                          "type": "text",
                          "text": "Stay updated and show appreciation by ⭐️ starring these repositories on GitHub. Engage deeper by joining their Slack or Discord communities."
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "listItem",
                  "content": [
                    {
                      "type": "paragraph",
                      "content": [
                        {
                          "type": "text",
                          "text": "Remember, contributing to open source is akin to building in public. It's a testament to your skills and boosts your professional credibility."
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "Supplement your journey with "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "extra resources"
                },
                {
                  "type": "text",
                  "text": " on system design."
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "As a "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "bonus"
                },
                {
                  "type": "text",
                  "text": ", check our upcoming Webinar."
                }
              ]
            },
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "Here's the link for novel "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "link",
                      "attrs": {
                        "href": "https://github.com/steven-tey/novel",
                        "target": "_blank",
                        "rel": "noopener noreferrer nofollow",
                        "class": "novel-text-stone-400 novel-underline novel-underline-offset-[3px] hover:novel-text-stone-600 novel-transition-colors novel-cursor-pointer"
                      }
                    },
                    {
                      "type": "textStyle",
                      "attrs": {
                        "color": "#2563EB"
                      }
                    }
                  ],
                  "text": "GITHUB"
                }
              ]
            },
            {
              "type": "paragraph"
            },
            {
              "type": "paragraph"
            }
          ]
        }
      ]
    }
  ]
} ;
const page = () => {
  // @ts-ignore
  // console.log(jsonData)

  return (
    <div>
        Novel Editor below

        <Editor />
  
        <PostPreview />
    </div>
  )
}

export default page
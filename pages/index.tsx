import type { NextPage } from 'next'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
export default function Index() {

  return (
    <Layout>
      <main>
          <div className="container mx-auto max-w-7xl">
                <div className="desktop:flex">
                  
                    <div className="min-w-0 flex-auto px-4 tablet:px-6 desktop:px-8 pt-10 pb-24 laptop:pb-16">
                      
                      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 desktop:gap-8">
                        <Section key={1}/>
                        <Section key={2}/>
                        <Section key={3}/>
                      </div>
                    </div>
                </div>
            </div>
        </main>
    </Layout>
      
    )
  }

function Section () {

  return (
    <section className="flex">
      <div className="w-full relative text-black overflow-hidden rounded-2xl flex shadow-lg border border-gray-200 hover:border-red-200 hover:bg-red-200">
        <div className="w-full flex laptop:flex-col">
          <div className="sm:max-w-sm laptop:w-auto laptop:flex-auto flex flex-col items-start relative z-10 p-6 desktop:p-8">
            <h2 className="text-xl font-semibold mb-2 text-shadow">Try it in the browser</h2>
            <p className="font-medium text-rose-100 text-shadow mb-4">Build something with Tailwind in our online playground.</p>
            <a href="https://play.tailwindcss.com/" className="mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">{`return`}</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block"></div>
      </div>
    </section>
  )
}
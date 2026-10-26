"use client";

import { useState } from "react";
import { COURSE_PRICE } from "@/lib/site";

const currency = new Intl.NumberFormat("fr-MA", { maximumFractionDigits: 0 });

export default function ProfitabilitySimulator() {
  const [sessionPrice, setSessionPrice] = useState(500);
  const [sessionsPerWeek, setSessionsPerWeek] = useState(5);
  const sessionsToBreakEven = Math.ceil(COURSE_PRICE / sessionPrice);
  const weeksToBreakEven = Math.ceil(sessionsToBreakEven / sessionsPerWeek);
  const monthlyRevenue = Math.round(sessionPrice * sessionsPerWeek * 4.33);

  return (
    <section
      className="my-16 rounded-[28px] bg-[#f3f3f1] px-5 py-9 sm:my-20 sm:px-9 sm:py-12 lg:my-24 lg:px-12 lg:py-14"
      id="rentabilite"
      aria-labelledby="profitability-title"
    >
      <div className="grid gap-7 border-b border-black/10 pb-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
        <div>
          <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.16em] text-neutral-500">
            <span className="h-px w-5 bg-brand" /> SIMULATEUR INDICATIF
          </p>
          <h2
            className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-6xl"
            id="profitability-title"
          >
            Combien de séances pour rentabiliser votre laser ?
          </h2>
        </div>
        <p className="text-[15px] leading-7 text-neutral-600">
          Ajustez le prix de vos séances et votre volume hebdomadaire pour
          obtenir une estimation indicative.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
        <div className="space-y-7">
          <label className="block">
            <span className="flex items-center justify-between gap-4 text-sm font-medium text-ink">
              Prix de votre séance
              <strong className="text-base tabular-nums">{currency.format(sessionPrice)} DH</strong>
            </span>
            <input
              className="mt-4 w-full accent-brand"
              type="range"
              min="200"
              max="1500"
              step="50"
              value={sessionPrice}
              onChange={(event) => setSessionPrice(Number(event.target.value))}
              aria-label="Prix de votre séance en dirhams"
            />
            <span className="mt-1 flex justify-between text-xs text-neutral-500">
              <span>200 DH</span><span>1 500 DH</span>
            </span>
          </label>
          <label className="block">
            <span className="flex items-center justify-between gap-4 text-sm font-medium text-ink">
              Séances par semaine
              <strong className="text-base tabular-nums">{sessionsPerWeek}</strong>
            </span>
            <input
              className="mt-4 w-full accent-brand"
              type="range"
              min="1"
              max="30"
              step="1"
              value={sessionsPerWeek}
              onChange={(event) => setSessionsPerWeek(Number(event.target.value))}
              aria-label="Nombre de séances par semaine"
            />
            <span className="mt-1 flex justify-between text-xs text-neutral-500">
              <span>1 séance</span><span>30 séances</span>
            </span>
          </label>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-divider bg-divider sm:grid-cols-3">
          <div className="bg-white p-5 sm:p-6">
            <p className="text-[13px] leading-5 text-neutral-600">Séances pour amortir l’investissement</p>
            <p className="mt-4 text-4xl font-medium tracking-[-.06em] text-ink">{sessionsToBreakEven}</p>
            <p className="mt-1 text-xs text-neutral-500">séances estimées</p>
          </div>
          <div className="bg-white p-5 sm:p-6">
            <p className="text-[13px] leading-5 text-neutral-600">Délai d’amortissement</p>
            <p className="mt-4 text-4xl font-medium tracking-[-.06em] text-ink">{weeksToBreakEven}</p>
            <p className="mt-1 text-xs text-neutral-500">semaines estimées</p>
          </div>
          <div className="bg-white p-5 sm:p-6">
            <p className="text-[13px] leading-5 text-neutral-600">Chiffre d’affaires mensuel estimé</p>
            <p className="mt-4 text-3xl font-medium tracking-[-.06em] text-ink">{currency.format(monthlyRevenue)}</p>
            <p className="mt-1 text-xs text-neutral-500">DH · base de 4,33 semaines</p>
          </div>
        </div>
      </div>

      <p className="mt-7 text-xs leading-5 text-neutral-600">
        Simulation indicative. Elle ne constitue pas une promesse de revenus.
      </p>
    </section>
  );
}

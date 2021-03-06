﻿using System;
using System.Diagnostics;
using System.Reactive.Linq;
using ReactiveUI;

namespace Kalaha.Models
{
    public class House : Cell
    {
        private readonly Action played;

        public House(IObservable<bool> belongsToActiveSideObservable, byte initialCount, Action played) : base(
            belongsToActiveSideObservable, initialCount)
        {
            this.played = played;
            var canMove = this.WhenAnyValue(x => x.Seeds, seeds => seeds > 0)
                .CombineLatest(belongsToActiveSideObservable, (a, b) => a && b);
            StartMovingSeeds = ReactiveCommand.Create(MoveSeeds, canMove);
        }

        public House Opposite { get; set; }

        public sealed override ReactiveCommand StartMovingSeeds { get; }

        public override void MoveSeeds(byte seedCount)
        {
            Seeds++;
            if (seedCount <= 0)
            {
                //switch player
            }
            if (seedCount == 1)
                return;
            Next.MoveSeeds(--seedCount);
        }

        private void MoveSeeds()
        {
            played();
            var toMove = Seeds;
            Seeds = 0;
            Next.MoveSeeds(toMove);
        }
    }
}
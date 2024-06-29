document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    const eventDate = new Date("Aug 08, 2024 19:00:00");
    const eventTimeStamp = eventDate.getTime();

    const timeIsPassing = setInterval(function() {
        const now = new Date();
        const nowTimeStamp = now.getTime();

        const untilEvent = eventTimeStamp - nowTimeStamp;

        const daysInMs = 1000 * 60 * 60 * 24;
        const hoursInMs = 1000 * 60 * 60;
        const minInMs = 1000 * 60;
        const secInMs = 1000;

        const daysUntilEvent = Math.floor(untilEvent / (daysInMs));
        const hoursUntilEvent = Math.floor(untilEvent % (daysInMs) / (hoursInMs));
        const minUntilEvent = Math.floor((untilEvent % (hoursInMs)) / (minInMs));
        const secUltilEvent = Math.floor((untilEvent % minInMs) / secInMs);

        document.getElementById('counter').innerHTML = `Tempo até o aniversário: ${daysUntilEvent}d ${hoursUntilEvent}h ${minUntilEvent}m ${secUltilEvent}s`

        if (untilEvent < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter').innerHTML = 'Cabou-se, essa pessoa já fez aniversário!'
        }
        
        const eventDate1 = new Date("Apr 02, 2025 00:00:00");
        const eventTimeStamp1 = eventDate1.getTime();

        const untilEvent1 = eventTimeStamp1 - nowTimeStamp;

        const daysUntilEvent1 = Math.floor(untilEvent1 / (daysInMs));
        const hoursUntilEvent1 = Math.floor(untilEvent1 % (daysInMs) / (hoursInMs));
        const minUntilEvent1 = Math.floor((untilEvent1 % (hoursInMs)) / (minInMs));
        const secUltilEvent1 = Math.floor((untilEvent1 % minInMs) / secInMs);

        document.getElementById('counter1').innerHTML = `Tempo até o aniversário: ${daysUntilEvent1}d ${hoursUntilEvent1}h ${minUntilEvent1}m ${secUltilEvent1}s`

        if (untilEvent1 < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter1').innerHTML = 'Cabou-se, essa pessoa já fez aniversário!'
        }

        const eventDate2 = new Date("May 30, 2025 00:00:00");
        const eventTimeStamp2 = eventDate2.getTime();

        const untilEvent2 = eventTimeStamp2 - nowTimeStamp;

        const daysUntilEvent2 = Math.floor(untilEvent2 / (daysInMs));
        const hoursUntilEvent2 = Math.floor(untilEvent2 % (daysInMs) / (hoursInMs));
        const minUntilEvent2 = Math.floor((untilEvent2 % (hoursInMs)) / (minInMs));
        const secUltilEvent2 = Math.floor((untilEvent2 % minInMs) / secInMs);

        document.getElementById('counter2').innerHTML = `Tempo até o aniversário: ${daysUntilEvent2}d ${hoursUntilEvent2}h ${minUntilEvent2}m ${secUltilEvent2}s`

        if (untilEvent2 < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter2').innerHTML = 'Cabou-se, essa pessoa já fez aniversário!'
        }

        const eventDate3 = new Date("Sep 03, 2024 00:00:00");
        const eventTimeStamp3 = eventDate3.getTime();

        const untilEvent3 = eventTimeStamp3 - nowTimeStamp;

        const daysUntilEvent3 = Math.floor(untilEvent3 / (daysInMs));
        const hoursUntilEvent3 = Math.floor(untilEvent3 % (daysInMs) / (hoursInMs));
        const minUntilEvent3 = Math.floor((untilEvent3 % (hoursInMs)) / (minInMs));
        const secUltilEvent3 = Math.floor((untilEvent3 % minInMs) / secInMs);

        document.getElementById('counter3').innerHTML = `Tempo até o aniversário: ${daysUntilEvent3}d ${hoursUntilEvent3}h ${minUntilEvent3}m ${secUltilEvent3}s`

        if (untilEvent3 < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter3').innerHTML = 'Cabou-se, essa pessoa já fez aniversário!'
        }

        const eventDate4 = new Date("Sep 09, 2024 00:00:00");
        const eventTimeStamp4 = eventDate4.getTime();

        const untilEvent4 = eventTimeStamp4 - nowTimeStamp;

        const daysUntilEvent4 = Math.floor(untilEvent4 / (daysInMs));
        const hoursUntilEvent4 = Math.floor(untilEvent4 % (daysInMs) / (hoursInMs));
        const minUntilEvent4 = Math.floor((untilEvent4 % (hoursInMs)) / (minInMs));
        const secUltilEvent4 = Math.floor((untilEvent4 % minInMs) / secInMs);

        document.getElementById('counter4').innerHTML = `Tempo até o aniversário: ${daysUntilEvent4}d ${hoursUntilEvent4}h ${minUntilEvent4}m ${secUltilEvent4}s`

        if (untilEvent4 < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter4').innerHTML = 'Cabou-se, essa pessoa já fez aniversário!'
        }

        const eventDate5 = new Date("Jun 12, 2025 09:00:00");
        const eventTimeStamp5 = eventDate5.getTime();

        const untilEvent5 = eventTimeStamp5 - nowTimeStamp;

        const daysUntilEvent5 = Math.floor(untilEvent5 / (daysInMs));
        const hoursUntilEvent5 = Math.floor(untilEvent5 % (daysInMs) / (hoursInMs));
        const minUntilEvent5 = Math.floor((untilEvent5 % (hoursInMs)) / (minInMs));
        const secUltilEvent5 = Math.floor((untilEvent5 % minInMs) / secInMs);

        document.getElementById('counter5').innerHTML = `Tempo até o aniversário: ${daysUntilEvent5}d ${hoursUntilEvent5}h ${minUntilEvent5}m ${secUltilEvent5}s`

        if (untilEvent5 < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter5').innerHTML = 'Cabou-se, essa pessoa já fez aniversário!'
        }

        const eventDate6 = new Date("Apr 23, 2025 00:00:00");
        const eventTimeStamp6 = eventDate6.getTime();

        const untilEvent6 = eventTimeStamp6 - nowTimeStamp;

        const daysUntilEvent6 = Math.floor(untilEvent6 / (daysInMs));
        const hoursUntilEvent6 = Math.floor(untilEvent6 % (daysInMs) / (hoursInMs));
        const minUntilEvent6 = Math.floor((untilEvent6 % (hoursInMs)) / (minInMs));
        const secUltilEvent6 = Math.floor((untilEvent6 % minInMs) / secInMs);

        document.getElementById('counter6').innerHTML = `Tempo até o aniversário: ${daysUntilEvent6}d ${hoursUntilEvent6}h ${minUntilEvent6}m ${secUltilEvent6}s`

        if (untilEvent6 < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter6').innerHTML = 'Cabou-se, essa pessoa já fez aniversário!'
        }

        const eventDate7 = new Date("Sep 30, 2024 09:00:00");
        const eventTimeStamp7 = eventDate7.getTime();

        const untilEvent7 = eventTimeStamp7 - nowTimeStamp;

        const daysUntilEvent7 = Math.floor(untilEvent7 / (daysInMs));
        const hoursUntilEvent7 = Math.floor(untilEvent7 % (daysInMs) / (hoursInMs));
        const minUntilEvent7 = Math.floor((untilEvent7 % (hoursInMs)) / (minInMs));
        const secUltilEvent7 = Math.floor((untilEvent7 % minInMs) / secInMs);

        document.getElementById('counter7').innerHTML = `Tempo até o aniversário: ${daysUntilEvent7}d ${hoursUntilEvent7}h ${minUntilEvent7}m ${secUltilEvent7}s`

        if (untilEvent7 < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter7').innerHTML = 'Cabou-se, essa pessoa já fez aniversário!'
        }
    }, 1000);
})
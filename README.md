# Hybrasyl Feedback & Issue Tracker

This repository is the shared, public **issue tracker for Hybrasyl's desktop
apps** — Creidhne, Taliesin, and their siblings. Bug reports and feedback from
every app land here, tagged by source app with an `app:<name>` label so they can
be triaged and routed.

> The former *Cernunnos* roadmap has moved and now lives as a module in the
> Hybrasyl website. This repository is now purely the feedback tracker.

## Reporting a problem

**From inside an app (recommended).** Each app has a **Report an issue** button
(in the toolbar and under Settings → About). It opens a short form, attaches a
small diagnostics block, and either opens a prefilled issue here or copies the
report to your clipboard.

**By hand.** [Open a new issue](../../issues/new/choose), pick **Bug report**, and
choose the app it concerns.

## Privacy

Diagnostics attached by the apps are **automatically scrubbed** before they leave
your machine — usernames, file paths, emails, and IP addresses are redacted, and
the operating system is reduced to `windows` / `macOS` / `linux`. You can review
and edit the diagnostics block before anything is sent.

## Labels

Each issue is tagged with the app it came from:

| Label | App |
| --- | --- |
| `app:creidhne` | Creidhne — world-data editor |
| `app:taliesin` | Taliesin — asset authoring tool |
| `app:oghma` | Oghma — issue tracker |
| `app:elatha` | Elatha — launcher |
| `app:mabon` | Mabon |
| `app:dagda` | Dagda |
| `app:epona` | Epona — client/server launcher |

## versions.json

`versions.json` holds the latest stable version of each desktop app. The apps read it to tell you when an update is available. It is updated as part of each app's release. Do not edit it by hand.

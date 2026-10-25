import type { Metadata } from "next";
import Link from "next/link";
import { Database, HardDrive, ShieldCheck } from "lucide-react";

import PrivacyTableOfContents from "@/components/privacy-table-of-contents";
import SiteFooter from "@/components/site-footer";
import SiteNavbar from "@/components/site-navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Skopio",
  description:
    "Learn how Skopio handles activity data and keeps it private on your Mac.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "data-skopio-processes", label: "Data Skopio processes" },
  { id: "permissions", label: "Permissions and input activity" },
  { id: "how-data-is-used", label: "How data is used" },
  { id: "network-connections", label: "Network connections" },
  { id: "storage-and-sharing", label: "Storage and sharing" },
  { id: "your-choices", label: "Your choices" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children’s privacy" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
] as const;

const PrivacyPage = () => (
  <div className="min-h-screen bg-white">
    <SiteNavbar />

    <main className="border-t border-black/10">
      <header className="bg-zinc-100 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-290">
          <p className="text-sm font-semibold tracking-[0.16em] text-black/55 uppercase">
            Legal
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-black sm:text-6xl">
            Privacy, without the fine print.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65 sm:text-xl">
            Skopio is a local-first macOS app. Your activity data is processed
            and stored on your Mac—not sent to a remote Skopio service.
          </p>
          <p className="mt-8 text-sm text-black/50">
            Last updated October 26, 2026
          </p>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-290 gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20 lg:px-0">
        <aside className="lg:sticky lg:top-36 lg:self-start">
          <PrivacyTableOfContents sections={sections} />
        </aside>

        <article className="min-w-0 max-w-3xl text-[1.0625rem] leading-8 text-black/70">
          <section
            id="overview"
            aria-labelledby="overview-title"
            className="scroll-mt-36"
          >
            <h2
              id="overview-title"
              className="text-3xl leading-tight font-semibold tracking-tight text-black"
            >
              Overview
            </h2>
            <p className="mt-5">
              This policy explains how Skopio handles information when you use
              the Skopio desktop app and its editor integrations. Skopio is
              designed around a simple principle: the activity information you
              create belongs to you and stays under your control.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: HardDrive,
                  title: "Stored locally",
                  text: "Activity data remains on your Mac.",
                },
                {
                  icon: Database,
                  title: "No Skopio cloud",
                  text: "No account or remote database is required.",
                },
                {
                  icon: ShieldCheck,
                  title: "No advertising",
                  text: "Activity data is not sold or used to profile you.",
                },
              ].map(({ icon: Icon, text, title }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/10 bg-zinc-50 p-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-black"
                    strokeWidth={1.75}
                  />
                  <h3 className="mt-5 text-base font-semibold text-black">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-black/55">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <PolicySection
            id="data-skopio-processes"
            title="Data Skopio processes"
          >
            <p>
              To provide activity insights, Skopio processes the following data
              locally, depending on the applications and integrations you
              enable:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-black/35">
              <li>
                application names, bundle identifiers, active-window titles,
                activity timestamps, durations, and away-from-keyboard periods;
              </li>
              <li>
                for supported browsers, the visited domain, full URL, and URL
                path while that browser is selected for tracking;
              </li>
              <li>
                for supported editors, the project and file paths, project and
                file names, branch, programming language, activity category, and
                the integration that produced the event; and
              </li>
              <li>
                preferences such as tracked applications, away-time settings,
                goals, dashboard layouts, theme, and keyboard shortcuts.
              </li>
            </ul>
            <p>
              This information is handled locally by the Skopio app and its
              integrations. Skopio does not require you to create an account,
              and it does not send your activity history to a remote Skopio
              service.
            </p>
          </PolicySection>

          <PolicySection
            id="permissions"
            title="Permissions and input activity"
          >
            <p>
              Skopio asks for macOS Accessibility permission so it can identify
              the active application and read relevant window, browser, and
              editor context. It asks for Input Monitoring permission to detect
              whether keyboard or pointer activity has occurred and determine
              when you are away.
            </p>
            <p>
              Skopio does not store what you type, individual key codes, pointer
              coordinates, clicks, or scroll details. Those input signals are
              handled in memory to update your active or away status; only the
              resulting away period and duration are saved.
            </p>
          </PolicySection>

          <PolicySection id="how-data-is-used" title="How data is used">
            <p>Skopio uses local activity data only to provide app features:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-black/35">
              <li>measuring time spent in enabled applications and editors;</li>
              <li>organizing activity by projects and related context; and</li>
              <li>presenting dashboards, goals, timelines, and insights.</li>
            </ul>
            <p>
              Skopio does not use activity data for advertising, user profiling,
              or cross-app tracking.
            </p>
          </PolicySection>

          <PolicySection id="network-connections" title="Network connections">
            <p>
              Skopio’s core activity tracking, storage, dashboards, and insights
              work locally. The desktop app connects to GitHub to check for
              Skopio desktop and local-server updates and, when needed, download
              them. Editor integrations may similarly check GitHub for and
              download the local Skopio helper they require.
            </p>
            <p>
              These update requests do not include your activity history. Like
              any request to GitHub, they may expose ordinary connection details
              such as your IP address and request headers to GitHub, which
              handles that information under its own privacy terms.
            </p>
          </PolicySection>

          <PolicySection id="storage-and-sharing" title="Storage and sharing">
            <p>
              Activity data is stored in local databases on your Mac. Editor
              extensions send activity events to a local Skopio helper, which
              passes them to Skopio’s local background server. In production,
              these components communicate through a permission-restricted Unix
              socket rather than a public internet service.
            </p>
            <p>
              Core activity databases are encrypted in release builds, with the
              encryption key stored in the operating system keychain. Skopio
              does not sell, rent, or share your activity data with advertisers,
              data brokers, or other third parties.
            </p>
            <p>
              If you choose to share, export, back up, or otherwise move local
              data using your device or another service, that action is under
              your control and may be governed by the privacy terms of the
              service you choose.
            </p>
          </PolicySection>

          <PolicySection
            id="your-choices"
            title="Your choices and data retention"
          >
            <p>
              You decide which supported applications and editor integrations
              Skopio may track. You can stop future activity capture by removing
              an application from the tracked-apps setting, disabling or
              uninstalling an editor integration, revoking Skopio’s macOS
              permissions, or quitting Skopio.
            </p>
            <p>
              Temporary event buffers are removed after they synchronize with
              Skopio’s local server, but the primary activity history is kept in
              the local database until you remove Skopio’s local application
              data from your Mac. Uninstalling the app may not remove all of its
              local data. Skopio cannot remotely access, recover, or delete data
              that exists only on your device.
            </p>
          </PolicySection>

          <PolicySection id="security" title="Security">
            <p>
              Keeping activity data on-device limits its exposure. You are also
              responsible for protecting access to your Mac, keeping macOS and
              Skopio up to date, and maintaining any backups you choose to make.
              No storage method is completely secure, but Skopio is designed to
              minimize data movement and unnecessary access.
            </p>
          </PolicySection>

          <PolicySection id="children" title="Children’s privacy">
            <p>
              Skopio is a general productivity tool and is not directed to
              children under 13. Skopio does not knowingly collect children’s
              personal information on a Skopio-operated server.
            </p>
          </PolicySection>

          <PolicySection id="changes" title="Changes to this policy">
            <p>
              This policy may be updated as Skopio changes. Material updates
              will be reflected on this page, and the “Last updated” date will
              identify the current version.
            </p>
          </PolicySection>

          <PolicySection id="contact" title="Contact">
            <p>
              For privacy questions or help locating local Skopio data, email{" "}
              <Link
                href="mailto:hey@samwahome.com"
                className="font-medium text-black underline decoration-black/30 underline-offset-4 transition-colors hover:decoration-black focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                hey@samwahome.com
              </Link>
              . Because Skopio cannot access data stored only on your Mac,
              please do not send activity logs, browsing history, file paths, or
              other sensitive local data unless it is necessary to resolve your
              request.
            </p>
          </PolicySection>
        </article>
      </div>
    </main>

    <SiteFooter />
  </div>
);

interface PolicySectionProps {
  children: React.ReactNode;
  id: string;
  title: string;
}

const PolicySection: React.FC<PolicySectionProps> = ({
  children,
  id,
  title,
}) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className="scroll-mt-36 border-t border-black/10 pt-10 mt-12 [&>p]:mt-4"
  >
    <h2
      id={`${id}-title`}
      className="text-2xl leading-tight font-semibold tracking-[-0.02em] text-black sm:text-3xl"
    >
      {title}
    </h2>
    {children}
  </section>
);

export default PrivacyPage;

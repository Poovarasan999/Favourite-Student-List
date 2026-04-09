import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext.jsx'
import StudentAvatar from '../components/StudentAvatar.jsx'

const CARD_CLASS =
  'relative rounded-xl border border-[#e8eaed] bg-[#fafafa] p-4 transition-shadow hover:shadow-[0_1px_3px_rgba(60,64,67,0.3)]'

const REMOVE_BUTTON_CLASS =
  'mt-4 w-full rounded-full border border-[#dadce0] bg-white px-4 py-2.5 text-sm font-medium text-[#d93025] transition hover:bg-[#fce8e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d93025]'

const HARD_WORK_NOTES = {
  1: 'Daily 5 AM study routine and weekly quantum problem-solving practice.',
  2: 'Completed advanced relativity worksheets and led peer concept sessions.',
  3: 'Built mini electromagnetic circuit models after class hours.',
  4: 'Prepared detailed quantum notes and solved previous-year university papers.',
  5: 'Practiced atomic model derivations and gave seminar presentations.',
  6: 'Spent extra lab hours documenting radiation experiment observations.',
  7: 'Maintained a mechanics formula journal with daily revision targets.',
  8: 'Completed telescope observation logs and astronomy homework consistently.',
  9: 'Worked on interdisciplinary project sketches and simulation drafts.',
  10: 'Solved cosmology research questions and attended extra theory discussions.',
  11: 'Implemented small physics-calculation scripts to improve understanding.',
  12: 'Prepared comparative biology-physics study notes for weekly tests.',
  13: 'Practiced QED problem sets and participated in student workshops.',
  14: 'Spent additional lab sessions on diffraction analysis and reporting.',
  15: 'Reworked Maxwell equations repeatedly with step-by-step derivations.',
  16: 'Created periodic trend charts and revised with timed practice.',
  17: 'Focused on nuclear problem drills and team-based concept explanations.',
  18: 'Performed repeat induction experiments and recorded all outcomes.',
  19: 'Prepared space-system case studies and delivered classroom summaries.',
  20: 'Maintained behavioral observation diaries and field-study reports.',
  21: 'Trained with mission-planning calculations and aerospace simulations.',
}

function StudentMeta({ student }) {
  return (
    <div className="mt-3 space-y-1 rounded-lg bg-white p-3 text-xs text-[#5f6368]">
      <p>
        <span className="font-medium text-[#202124]">Department:</span>{' '}
        {student.department ?? 'N/A'}
      </p>
      <p>
        <span className="font-medium text-[#202124]">Year:</span>{' '}
        {student.year ?? 'N/A'}
      </p>
      <p>
        <span className="font-medium text-[#202124]">Focus:</span>{' '}
        {student.focus ?? 'N/A'}
      </p>
    </div>
  )
}

function FavouriteExtraMeta({ studentId }) {
  return (
    <div className="mt-3 space-y-1 rounded-lg border border-[#e8eaed] bg-[#f8f9fa] p-3 text-xs text-[#5f6368]">
      <p>
        <span className="font-medium text-[#202124]">Rank:</span> #{studentId}
      </p>
      <p>
        <span className="font-medium text-[#202124]">Hard Work:</span>{' '}
        {HARD_WORK_NOTES[studentId] ??
          'Consistent revision and regular practice sessions.'}
      </p>
    </div>
  )
}

function FavouriteStudentsPage() {
  const { favouriteStudents, removeFromFavourites } = useContext(StudentContext)

  return (
    <section className="rounded-2xl border border-[#dadce0] bg-white p-6 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] sm:p-8">
      <h2 className="text-2xl font-normal text-[#202124]">
        Favourite Students
      </h2>
      <p className="mt-1 text-sm text-[#5f6368]">
        Students you marked as favourites appear here on every page.
      </p>

      {favouriteStudents.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-[#dadce0] bg-[#f8f9fa] px-6 py-12 text-center">
          <p className="text-[#5f6368]">No favourite students added yet</p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {favouriteStudents.map((student) => (
            <article key={student.id} className={CARD_CLASS}>
              <StudentAvatar
                student={student}
                className="absolute right-4 top-4 h-11 w-11 rounded-full border border-[#dadce0] bg-white object-cover"
              />
              <p className="text-base font-medium text-[#202124]">
                {student.name}
              </p>
              <p className="mt-1 text-sm text-[#5f6368]">
                ID: {student.rollNumber}
              </p>
              <StudentMeta student={student} />
              <FavouriteExtraMeta studentId={student.id} />
              <button
                type="button"
                className={REMOVE_BUTTON_CLASS}
                onClick={() => removeFromFavourites(student.id)}
              >
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default FavouriteStudentsPage

import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext.jsx'
import StudentAvatar from '../components/StudentAvatar.jsx'

const CARD_CLASS =
  'relative rounded-xl border border-[#e8eaed] bg-[#fafafa] p-4 transition-shadow hover:shadow-[0_1px_3px_rgba(60,64,67,0.3)]'

const ACTION_BUTTON_CLASS =
  'mt-4 w-full rounded-full bg-[#1a73e8] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#1557b0] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8] disabled:cursor-not-allowed disabled:bg-[#dadce0] disabled:text-[#5f6368] disabled:shadow-none'

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

function StudentListPage() {
  const { students, favouriteStudents, addToFavourites } =
    useContext(StudentContext)

  return (
    <section className="rounded-2xl border border-[#dadce0] bg-white p-6 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] sm:p-8">
      <h2 className="text-2xl font-normal text-[#202124]">Student List</h2>
      <p className="mt-1 text-sm text-[#5f6368]">
        Choose students to add to your favourites. Duplicates are not added
        twice.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => {
          const isFavourite = favouriteStudents.some(
            (item) => item.id === student.id,
          )

          return (
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
              <button
                type="button"
                onClick={() => addToFavourites(student)}
                disabled={isFavourite}
                className={ACTION_BUTTON_CLASS}
              >
                {isFavourite ? 'Added' : 'Add to Favourite'}
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default StudentListPage

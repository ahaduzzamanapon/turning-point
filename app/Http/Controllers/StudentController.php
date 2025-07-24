<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Requests\StudentRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return Inertia::render('Student/Index', [
            'students' => $students,
        ]);
    }

    public function create()
    {
        return Inertia::render('Student/Create');
    }

    public function store(StudentRequest $request)
    {
        Student::create($request->validated());

        return redirect()->route('admin.students.index')->with('success', 'Student registered successfully!');
    }

    public function show(Student $student)
    {
        return Inertia::render('Student/Show', [
            'student' => $student,
        ]);
    }

    public function edit(Student $student)
    {
        return Inertia::render('Student/Edit', [
            'student' => $student,
        ]);
    }

    public function update(StudentRequest $request, Student $student)
    {
        $student->update($request->validated());

        return redirect()->route('admin.students.index')->with('success', 'Student updated successfully!');
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return redirect()->route('admin.students.index')->with('success', 'Student deleted successfully!');
    }
}
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Note;
class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Note[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        $current_user = auth()->user();
        return $current_user->notes()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Note|\Illuminate\Database\Eloquent\Model
     */
    public function store(Request $request)
    {
        $current_user = auth()->user();
        return Note::create([
            'content' => $request->get('content'),
            'resource_type' => $request->get('resource_type'),
            'user_id' => $current_user->id 
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Note $note
     * @return Note
     */
    public function show(Note $note)
    {
        return $note;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Note $note
     * @return bool
     */
    public function update(Request $request, Note $note)
    {
        return $note->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Note $note
     * @throws \Exception
     */
    public function destroy(Note $note)
    {
        $note->delete();
    }
}
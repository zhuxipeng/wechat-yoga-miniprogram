package handlers

import (
	"database/sql"
	"net/http"
)

/*
 
*/
func V1Book(db *sql.DB, w http.ResponseWriter, r *http.Request) {
	openId := r.URL.Query().Get("openId")
	if len(openId) == 0 {
		http.NotFound(w, r)
		return
	}
	id := r.URL.Query().Get("id")
	if len(id) == 0 {
		http.NotFound(w, r)
		return
	}
	QueryJSON(w, db, "select * from v1_book($1,$2)",  id,openId)
}

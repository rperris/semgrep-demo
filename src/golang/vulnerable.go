package main

import (
	"context"
	"database/sql"
	"fmt"
	"http"

	"github.com/jackc/pgx/v4"
)

var db *sql.DB
var postgresDb *pgx.Conn

func dbExec(r *http.Request) {
	customerId := r.URL.Query().Get("id")
	// ruleid: string-formatted-query
	query := "SELECT number, expireDate, cvv FROM creditcards WHERE customerId = " + customerId

	row, _ := db.Exec(query)
}
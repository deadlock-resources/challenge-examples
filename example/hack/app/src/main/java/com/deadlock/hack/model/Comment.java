package com.deadlock.hack.model;

import org.springframework.lang.NonNull;

public class Comment {
    private int id;
    @NonNull
    private String content;
    private int catId;

    public Comment(final int id, final String content, final int catId) {
        this.id = id;
        this.content = content;
        this.catId = catId;
    }
}

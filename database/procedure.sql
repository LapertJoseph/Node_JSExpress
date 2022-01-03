use todo_dev;

DELIMITER //
CREATE OR REPLACE PROCEDURE insertTodo (IN p_texte VARCHAR(255))

BEGIN
    INSERT INTO todo (texte)
    VALUES (p_texte);
END //

CREATE OR REPLACE PROCEDURE updatedTodo (IN p_id INT, IN p_texte VARCHAR(255))

BEGIN
    UPDATE todo 
    SET texte = p_texte
    WHERE id = p_id;
END //

CREATE OR REPLACE PROCEDURE deleteTodo (IN p_id INT)

BEGIN 
    DELETE todo
    FROM todo
    WHERE id = p_id;
END //